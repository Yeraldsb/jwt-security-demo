# 🚀 Node.js Project with Preloaded Dependencies  

Este proyecto es un ejemplo práctico que muestra cómo utilizar JSON Web Tokens (JWT) en un servidor Node.js. Su objetivo es ilustrar la autenticación básica mediante JWT de forma sencilla y directa.

## 📂 Estructura del Proyecto  
```bash
├── node_modules/      # Todas las dependencias necesarias para el proyecto.  
├── src/               # Código fuente principal.  
├── package.json       # Configuración de dependencias y scripts.  
├── README.md          # Documentación del proyecto.  
```
## 🔧 Instalación y Uso

1️⃣ Clonar el repositorio

2️⃣ Instalar las dependencias necesarias
- Accede al directorio del proyecto y ejecuta: ```npm install```
- Esto descargará e instalará automáticamente todas las dependencias necesarias para el proyecto.

## 🚀 Cómo Ejecutar

- Para iniciar el servidor,en una terminal usa el siguiente comando:
```node src/index.js```

- El servidor se ejecutará en localhost:3000 (puerto configurado). Puedes acceder desde tu navegador o herramientas como Postman.

## 🎯 Ejemplo de Uso  

El servidor tiene dos endpoints principales que puedes probar con `curl`:  

### 🔹 Login (`POST /login`)  
Este endpoint autentica a un usuario y devuelve un **JWT** válido que se puede utilizar en solicitudes posteriores.  

#### 📌 Ejemplo de solicitud con `curl`:  
```sh
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username":"admin","password":"admin"}'
```
Si las credenciales son correctas, recibirás un **JWT** en la respuesta.  

### 🔹 Dashboard (`GET /dashboard`)  
Este endpoint es **protegido** y requiere un **JWT** en la cabecera de autorización.  

#### 📌 Ejemplo de solicitud con `curl`:  
```sh
curl -i http://localhost:3000/dashboard -H "Authorization: Bearer <TOKEN_RECIBIDO_DEL_LOGIN>"
```
Si el token es válido, recibirás un mensaje de bienvenida en el dashboard. Si es inválido o ha expirado, recibirás un error.

## 🛠️ Dependencias Utilizadas

Este proyecto utiliza las siguientes librerías:
- Node.js
- Express
- jsonwebtoken
