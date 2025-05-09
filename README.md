# School Management Tool

# `/backend`

### install dependencies

```
npm ci
```

### run

```
npm run start
```

### run migrations

```
npm run prisma:migrate
```

During the first run, the app will create an admin user based on
FIRST_ADMIN_EMAIL & FIRST_ADMIN_PASSWORD env variables to let you login into the system

### `npm run prisma:merge`

Merges all prisma models into single file

### `npm run prisma:generate`

Merges all prisma models as last one and updates prisma client

### `npm run prisma:migrate`

Update database based on existing migrations, and creates migration in case of model changes comparing to the database

# `/frontend`

### install dependencies

```
npm ci
```

### run dev mode

```
npm run start
```

### build

```
npm run build
```
