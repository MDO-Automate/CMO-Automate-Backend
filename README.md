# INSTALACIÓN DE PROYECTO

1.	Clonar el repositorio en la maquina local con $ git clone https://github.com/MDO-Automate/CMO-Automate-Backend.
2.	Una vez descargado el proyecto ejecutar el comando $ yarn para la instalación de dependencias necesarias para el funcionamiento del proyecto.
3.	Ya instaladas las dependencias se procede a ejecutar el proyecto en modo desarrollo con $ yarn start:dev
4.	Al momento de ejecutar el proyecto por primera vez este crea las tablas en el SQL Server en una base de datos llamada CMO_Prueba, por ello se debe de tener esta base de datos creada previamente, una vez que se tiene creada la base de datos y las tablas ejecutar el script de SQL ubicado en “/backup/db-defaultData.sql” para ingresar la información por defecto que debe tener el aplicativo.
