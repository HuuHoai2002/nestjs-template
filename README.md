# NestJS Project Template

### Author: Huuhoai2002

# Technology

1. [NestJS](https://nestjs.com/): A progressive Node.js framework for building efficient, reliable and scalable server-side applications.

2. [Prisma](https://www.prisma.io/): Next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, MariaDB, SQLite and MongoDB.

3. [Redis](https://redis.io/): Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.

4. [Passport](http://www.passportjs.org/): Passport is authentication middleware for Node.js.

5. [JWT](https://jwt.io/): JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

6. [S3](https://aws.amazon.com/s3/): Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.

# Configuration

1. Create a `.env` file
   - Rename the [.env.sample](.env.sample) file to `.env` to fix it.
2. Edit env config
   - Edit the file in the [config](src/config) folder.
   - `default`, `development`, `production`, `test`

# Installation

1. Install dependencies

```bash
$ npm install # or yarn install
```

3. Setup Prisma

   - [Prisma Schema](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
   - [Prisma Setup](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-typescript-postgres)
   - [Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)
   - [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)
   - [Prisma Studio](https://www.prisma.io/docs/concepts/components/prisma-studio)
   - [Prisma CLI](https://www.prisma.io/docs/reference/api-reference/command-reference)

4. Run the app

```bash
# development
$ npm run dev # or yarn dev
# watch mode
$ npm run start:dev # or yarn start:dev
# production mode
$ npm run start:prod # or yarn start:prod
```

# Folder Structure

```js
+-- bin // Custom tasks
+-- dist // Source build
+-- public // Static Files
+-- src
|   +-- modules // Modules structure
|   |   +-- auth // Module name
|   |   |   +-- auth.service.ts // Service
|   |   |   +-- auth.controller.ts // Controller
|   |   |   +-- auth.module.ts // Module
|   |   |   +-- auth.interface.ts // Interface
|   |   |   +-- dto // DTO
|   |   |   +-- interceptors // Interceptors
|   |   |   +-- guards // Guards
|   |   |   +-- filters // Filters
|   |   |   +-- pipes // Pipes
|   |   |   +-- * // models, repositories, strategies...
|   +-- common // Global Nest Module
|   |   +-- constants // Constant value and Enum
|   |   +-- controllers // Nest Controllers
|   |   +-- decorators // Nest Decorators
|   |   +-- dto // DTO (Data Transfer Object) Schema, Validation
|   |   +-- filters // Nest Filters
|   |   +-- guards // Nest Guards
|   |   +-- interceptors // Nest Interceptors
|   |   +-- interfaces // TypeScript Interfaces
|   |   +-- middleware // Nest Middleware
|   |   +-- pipes // Nest Pipes
|   |   +-- providers // Nest Providers
|   |   +-- * // models, repositories, services...
|   +-- shared // Shared Nest Modules
|   +-- config // Config
|   +-- main.ts // NestJS Entry Point
|   +-- app.module.ts // NestJS Root Module
|   +-- * // Other Nest Modules, non-global, same as common structure above
+-- test // Jest testing
```
