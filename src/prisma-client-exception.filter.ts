import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

class PrismaException implements Prisma.PrismaClientKnownRequestError {
  code: string;
  meta?: { target: string[] };
  clientVersion: string;
  get [Symbol.toStringTag](): string {
    throw new Error('Method not implemented.');
  }
  name: string;
  message: string;
  stack?: string;
}

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: PrismaException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse<Response>();

    switch (exception.code) {
      case 'P2002':
        const status = HttpStatus.CONFLICT;
        const [errorField] = exception.meta.target;

        response.status(status).json({
          statusCode: status,
          message: `Sorry, that ${errorField} already exists!`,
        });

        break;
      default:
        super.catch(exception, host);
        break;
    }
  }
}
