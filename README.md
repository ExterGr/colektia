# colektia image CRUD app

## Instrucciones:

Una vez descargado el proyecto:


## Ejecutar el Backend:
Antes que nada, ejecutar en la base de datos los siguientes comandos en MySQL (que sirven para crear la base de datos respectiva):
```
DROP DATABASE IF EXISTS colektia_ivan_kudacki; 
CREATE DATABASE colektia_ivan_kudacki; 
```

Entrar a la carpeta ```api``` con el comando:

```cd api```

Y hacer ```yarn install``` o ```npm install```.

Para configurar el usuario de MySQL:

Entrar a la carpeta ```config``` y abrir ```config.json```. 

En la sección:

```
"development": {
    "username": "root",
    "password": "admin",
    "database": "colektia_ivan_kudacki",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
```
Reemplazar el valor de ```username``` y ```password``` con los propios.

Una vez hecho esto, estamos listo para ejecutar el backend con el comando:
```npm run dev```

El mismo corre en el puerto ```http://localhost:3000```

## Ejecutar el Frontend:

Entrar a la carpeta ```client``` con el comando:

```cd client```

Y hacer ```yarn install``` o ```npm install```.

Una vez terminado el proceso de instalación, podemos correr la aplicación con el comando:
```npm run serve```

El mismo corre en el puerto ```http://localhost:8080```