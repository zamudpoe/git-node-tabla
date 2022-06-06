/* IMPORTAMOS NUESTRA UTILERIA */
const { fnTablaMultiplicar }  = require ('./helpers/multiplicar')
const argv                    = require('./config/yargs')
const colors                  = require('colors')

colors.setTheme({
  custom: ['bgCyan', 'white', 'bold' ]
});

/* 
if ( argv.base > 3 && argv.edad >= 18 ) {
  console.log(`\n\tERES MAYOR DE EDAD ${argv.edad} \n\tY ESPECIFICASTE BASE DE ${argv.base} \n\tP/ARCHIVO DE TABLA DE MULTIPLICAR DEL ${argv.base} `.bgBlue.white.bold )
} else {
  console.log('\nERES MENOR DE EDAD '.bgRed.yellow.bold )
}  
*/
 
fnTablaMultiplicar( argv.base, argv.listar , argv.hasta)  
  .then( respuesta => console.log( respuesta ) )
  .catch( err => console.log(err) ) 
 
