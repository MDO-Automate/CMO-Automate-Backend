# Instalación CMO AUTOMATE BACKEND

El proyecto en el backend se encuentra construido sobre la tecnología de Nest JS en su versión 10, usando SQL Server como motor de base datos. Para el correcto funcionamiento del proyecto se debe de tener estas tecnologías instaladas en el sistema junto a otras tecnologías que ayudarán a mejorar el proceso de desarrollo.

## Instalar Git

El proyecto se encuentra bajo una herramienta de control de versiones para manejar cada implementación realizada, al igual que se encuentra alojado de forma privada en GitHub. Para poder descargar el proyecto se necesita tener git instalado en el sistema.

[Descargar GIT](https://git-scm.com/)

## Instalar Node JS v18.17.1

El entorno de ejecución del backend es Node JS por lo que se necesita tener el mismo instalado en el sistema para su ejecución, para ello se debe de instalar la versión de node js 18 y nvm (sirve para instalar varias versiones de node en un mismo sistema).

[Link descarga node js](https://nodejs.org/en)

[Link descarga NVM](https://github.com/coreybutler/nvm-windows/releases)

## Instalar Nest JS v10.1.17

Nest js es un framework de JS orientado a la creación de servicios Backend, este ayuda crear un entorno de desarrollo modular, donde cada modulo se encuentra aislado por lo que permite la creación de servidores con gran escalabilidad.
Para la instalación del mismo se necesita tener node instalado previamente en el sistema y ejecutar los siguientes comandos.

$ npm install -g @nestjs/cli



Para más detalle leer la documentación
[Link de documentación](https://docs.nestjs.com/#installation)

## Instalar Yarn

Debido a la alta velocidad de yarn para resolver las dependencias se decidió utilizarlo en lugar de npm. Para instalar yarn se tiene que tener node instalado previamente en el sistema y ejecutar el siguiente comando.
$ npm i -g yarn

## Instalar SQL Server y SQL server Management

Para el correcto funcionamiento del backend se tiene que conectar a un servicio de base datos y tener un gestor del mismo, por lo que se tiene que instalar los siguientes programas:

[Instalar SQL Server (Servicio de base de datos)](https://www.microsoft.com/es-es/sql-server/sql-server-downloads)

[Instalar SQL Server Management (Gestor de base de datos)](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16)

## Instalación del proyecto

Para la instalación de se debe de tener acceso al repositorio de GitHub donde se encuentra alojado el proyecto, una vez con el acceso realizar los siguientes pasos.

1. Clonar el repositorio en la maquina local con $ git clone https://github.com/MDO-Automate/CMO-Automate-Backend.
2. Una vez descargado el proyecto ejecutar el comando $ yarn para la instalación de dependencias necesarias para el funcionamiento del proyecto.
3. Ya instaladas las dependencias se procede a ejecutar el proyecto en modo desarrollo con $ yarn start:dev
4. Al momento de ejecutar el proyecto por primera vez este crea las tablas en el SQL Server en una base de datos llamada CMO_Prueba, por ello se debe de tener esta base de datos creada previamente, una vez que se tiene creada la base de datos y las tablas ejecutar el script de SQL ubicado en “/backup/db-defaultData.sql” para ingresar la información por defecto que debe tener el aplicativo.
5. Cambiar el nombre de .env.production por .env que se encuentra en la raíz del proyecto.
