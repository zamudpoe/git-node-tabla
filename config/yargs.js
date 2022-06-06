#!/usr/bin/env node
const yargs         = require('yargs/yargs')
const { hideBin }   = require('yargs/helpers')
const argv          = yargs( hideBin(process.argv) )
.option('b', {
    alias           : 'base',
    type            : 'number',
    demandOption    : ( true, "\n\tPor favor proporciona el numero base deseado generar la tabla de multiplicar, para poder utilizar esta herramienta!\n" ),      
    describe        : 'Numero de la tabla de multiplicar',
  }
)
.option('h', {
    alias           : 'hasta',
    type            : 'number',
    default         : 10,
    describe        : 'Numero hasta el cual se generara la tabla de multiplicar', 
  }
)
.option('l', {
    alias           : 'listar',
    type            : 'boolean',
    default         : false,
    describe        : 'Listar la tabla de multiplicar al terminar la ejecucion', 
  }
)
.check( (argv, options ) => {
  if ( isNaN( argv.b || isNaN( argv.h ) ) ){
    console.clear()
    throw new Error('\n\t>>>>>>>>>>>>> La base tiene que ser un numero <<<<<<<<<<<<<<<\n') 
  } 
  
  return true
} )
.help()
.argv

module.exports = argv 
