# Preparar Repo para Github & **Respaldo Local** 

# Preparamos nuestro proyecto
1. Creamos el archivo `gitignore` en **raiz**
1. Ignoramos todos los archivos **txt** que se encuentren dentro de la carpeta **/salida** ,agregamos al arhivo gitignore la linea `/salida/*.txt` 
1. Ignoramos los modulos de node : **`node_modules/`** 

# Git Setup

1. Ejecutamos:  ``git init``  
   > NOTA: si somos observadores apreciaremos que todo loq ue pedimos que se ignore , tendra un color gris en nuestro ambiente de VSS Code 
1. Nos preparamso para hacer nuestro **1er commit**  
   1. ``git add .`` , Para que nos tome todo lo que no debe ser ignorado y que tenga cambios para agregarlo nuestro repo. 
    
        > Como es nuestro primer commit toma todo , de lo contrario solo tomara lo que tenga cambios o sea nuevo o que ya no deba estar lo elimina. 
       
   1. Sacamos la fotografia de nuestro proyecto: ``git commit -m "MENSAJE DE PRIMER COMMIT"``  
      > Con el commit hecho si por desgracia se borra accideltamente una carpeta , la restauramos con el comando : ``git checkout -- .``   
   
   ## LISTO YA TENEMOS PREPARADO NUESTRO REPO Y ESTAMOS RESPALDADOS DE FORMA LOCAL.

   ### CONTINUAMOS... 

   1. **Vinculamos** nuestro proyecto al repositorio en github **``git remote add origin https://github.com/zamudpoe/git-node-tabla.git``**  
   1. **Renombramos** la rama principal por **main**: **``git branch -M main``** 
   1. Agregamos al repositorio :  ``git push -u origin main``  

   1. Creamos el archivo ``README.md`` en la raiz del proyecto y le ponemos todo lo que quermos en formato markdown. 
   1. **Preparamos** nuestro proyecto para subir el nuevo archivo **README.md** que acabamos de crear: 
      1. Agregamos los cambios: ``git add .`` 
      1. Hacemos el commit :  ``git commit -m "README.md agregado"`` 
      1. Hacemos el push: ``git push`` 

