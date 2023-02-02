
# Social Book
Live chat application. 


## Packages

**Front End:** React, Redux, Material UI

**Back End:** NodeJS, ExpressJS

**Database:** MongoDB


## Features

- OAuth 2.0
- Captcha for login/registration forms
- Docker Containerized



## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)



## Run Locally

Clone the project

```bash
  git clone https://github.com/imashaWe/social-book
```

Go to the project directory

```bash
  cd social-book/packages
```

Install dependencies for backend

```bash
  cd backend
```
```bash
  yarn install
```

Start the backend server

```bash
  yarn  run start
```

Install dependencies for frontend

```bash
  cd frontend
```
```bash
  yarn install
```

Start the frontend

```bash
  yarn  run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ACCESS_TOKEN_SECRET`

`MONGO_URL`


## Deployment

To deploy this project run

```bash
  docker-compose up
```
