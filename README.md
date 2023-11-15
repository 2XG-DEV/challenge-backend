## Submission

link to frontend : https://github.com/2XG-DEV/challenge-frontend

For my submission I went for a simple Client-Server Architecture

Client : NextJS + TypeScript

NextJS was chosen because it makes creating SSR pages trivial. SSR is highly beneficial for e-commerce applications because it provides high SEO and quick Time To Interactive which is important for keeping users on the page, it also comes with many optimisations out of the box

Server : Node + Express + PrismaORM + SQLite + TypeScript

Node + Express were chosen because of their popularity, light weight and good DX allowing for quick development of small projects 

(note: NextJS can be used as a full-stack framework providing an express server out of the box, still I have chosen separating the backend from the frontend to allow them to be developed independently, perhaps by different teams, also they can now be scaled independently, you might want them to scale independently if for example you want to get a mobile application hooked up to the REST API which would then put more load on the backend compared to the web frontend)

PrismaORM + SQLite were chosen because Prisma allows for easilly changing the DB provider to allow for more suitable DBs like Postgres, sqlite was only used because it does not require any setup like docker containers

## Challenge 1

For the first part of the challenge : "approaching the architecture of an e-commerce application", I have decided for a feature based folder structure for both frontend and backend, such a folder structure allows for a intuitive layout of the files allowing them to be more easilly found, in my experience this kind of layout allows developers to more easilly get back into a project after not working on the project for a longer period of time. This structure also allows developers to more easilly analyse dependencies and see weaknesses of the system, it also allows for features to be developed more independently and makes it easier to break a "monolithic" architecture into microservices / microfrontends based on the different features

```
/app
|-- /src
    |-- /products
        |-- /components
        |-- /services
        |-- types.js
    |-- /categories
        |-- /components
        |-- /services
        |-- types.js
    |-- /users
        |-- /components
        |-- /services
        |-- tupes.js
    |-- /orders
        |-- /components
        |-- /services
        |-- types.js
    |-- /shipping
        |-- /components
        |-- /services
        |-- types.ts
    |-- /payments
        |-- /components
        |-- /services
        |-- types.js
    |-- /common
        |-- /utils
        |-- /validation
```

Data should usually be fetched inside of a service and then either be used inside of a page or a context in order to then be passed via props to the individual components. This pattern allows for good separation of concerns, testability and maintainability (in my experience)

The projects are setup with prettier and es-lint allowing for consistent code style and rule enforcement across the team. They also setup with a .nvmrc config file to ensure all team members run the project with the same version of node for reduced conflicts

The projects also have jest testing setup (altough none are actually written), testing is an important step inside of any CI/CD pipeline and should be properly setup for any serious project

Other technologies i would use for an e-commerce application include : 

zod -> real time type validations for both backend and frontend

react hook form -> powerfull , easy to use library for handling forms in react applications

tailwind -> CSS Framework

shadcn/ui -> open component library of high accesibility components

tanstack-query -> powerfull server state manager for the frontend, includes promise handling with request deduplication and caching built in

For a production ready backend I would have used NestJS, a node backend framework which allows for more maintainable projects by using patterns such as dependency injection, controller, factory, observer, events etc

## Challenge 2

The code for the second challenge is in the backend repository, a simple express server with a database schema. For the handling of the multiple payment processors I have used abstract classes factory and strategy pattern. For a more comprehensive solution the Adapter pattern could have been used to account for differences in the APIs/SDKs of the different payment processors

## Conclusion

The proposed architecture, altough simple should be easy to extend, maintain and test, the proposed technologies ensure all non-functional requirements of an e-commerce application : High SEO, High Accesibility, Low Time To Interactive.

## Starting the apps

First, start the backend :

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

Create .env file with 

```
DATABASE_URL="file:db.sqlite"
```

Then, start the frontend:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

