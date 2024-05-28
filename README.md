# GitHub Repositories API
Prueba Backend Master
Esta aplicación Node.js consume la API de GitHub y muestra los 10 repositorios más populares del usuario "google".
By: Stiven Diaz

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/asdm1098/backendmaster.git
   cd backendmaster

2. Instala las dependencias:
    ```bash
    npm install

# Uso
1. Inicia el servidor:
    ```bash
    node src/server.js
2. Accede a la API en http://localhost:3000/api/repos.

## Pruebas

Para ejecutar las pruebas unitarias, usa el siguiente comando:

```bash
npm test

# Notas
Asegúrate de tener Node.js instalado.
La API de GitHub tiene límites de tasa. Asegúrate de no hacer demasiadas solicitudes en un corto período de tiempo.