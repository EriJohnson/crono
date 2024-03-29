<p align="center">
  <img src="https://static.wixstatic.com/media/6ea5d4_d4f0f11421144775a811892b8d0d1ff9~mv2.jpg/v1/fill/w_215,h_215,al_c,q_80,usm_0.66_1.00_0.01/Logo%20OANSE.webp" width="320" alt="OANSE Logo" />
</p>

# Descrição

Back end da aplicação do sistema gerenciamento para o OANSE.

# Pré-requisitos

## 1. Instalar o banco de dados

### Caso não use Docker:

1. Visite: [postgresql.org](https://www.postgresql.org/)

2. Na seção de downloads, baixe a versão para o seu sistema operacional
   e instale normalmente.

   NO SETUP, DESMARQUE A OPÇÃO: "Stack Builder"❗

3. Execute o cli do postgres, "SQL Shell (psql)", e crie um banco de dados
   com o nome: "crono_db". OBS.: Não esqueça de colocar ponto e vírgula em comandos SQL!



```bash
CREATE DATABASE crono_db;
```

4. Vá para o passo 2.

### Caso use Docker:

1. Crie o container docker com a imagem do postgres:

```bash
docker run --name crono-container -p 5432:5432 -e POSTGRES_PASSWORD=123456 -d postgres
```

2. Execute o container docker:

```bash
docker start crono-container
```

3. Crie o banco de dados com o comando:

```bash
docker exec -i crono-container psql -U postgres -c "CREATE DATABASE crono_db WITH OWNER=postgres;"
```

## 2. Configurar .env

faça uma cópia do arquivo .env.example e renomeie para somente .env e configure as variáveis conforme os dados de configurações de banco, docker etc.

## 3. Instalação de dependências

```bash
npm install
```

## 4. Rodar migrations do banco de dados

```bash
npx prisma migrate dev
```

## 5. Rodar o projeto

```bash
# development
npm run dev

# production mode
npm run prod
```

# Sugestões

[Prisma Studio](https://www.prisma.io/studio): Uma interface visual para gerenciar o banco de dados.

Rode o comando abaixo ou então faça o download do aplicativo para o seu sistema:

```bash
npx prisma studio
```

[pgAdmin](https://www.pgadmin.org/download/pgadmin-4-apt/): Um gerenciador de banco dados visual para postgres obs.: só precisa instalar a versão de desktop com o comando:

```bash
# Instala a versão para desktop:
sudo apt install pgadmin4-desktop
```
