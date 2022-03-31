import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

class PrismaException extends Prisma.PrismaClientKnownRequestError {
  meta?: { target: string[] } | any;
}

@Catch()
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: PrismaException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const { code } = exception;

    if (code === 'P2002') {
      const status = HttpStatus.CONFLICT;
      const [errorField] = exception.meta.target;

      response.status(status).json({
        statusCode: status,
        message: `Sorry, that ${errorField} already exists!`,
      });

      return;
    }

    if (code === 'P2025') {
      const status = HttpStatus.NOT_FOUND;
      const { cause } = exception.meta;

      response.status(status).json({
        statusCode: status,
        message: cause,
      });

      return;
    }

    return response.status(404).json({
      statusCode: 404,
      message: 'Not found',
    });
  }
}
