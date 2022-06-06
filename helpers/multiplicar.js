const { writeFile , writeFileSync } = require('fs')
const { Buffer }    = require( 'buffer')
const colors                  = require('colors')
/* console.clear() */

const fnTablaMultiplicar = async ( base , listar, hasta ) => {  

  return new Promise( ( resolve, reject ) => {
    const fileName = `./salida/Tbl-${base}X${hasta}.txt`

    let outputFile = "" 
    let consola    = "" 

    outputFile +=  '==========================\n' 
    outputFile +=  `     TABLA DEL: ${base} \n`
    outputFile +=  '==========================\n' 
      
    consola +=  '==========================\n'.cyan.bold
    consola +=  `     TABLA DEL: ${base} \n`.cyan.bold
    consola +=  '==========================\n'.cyan.bold

    for ( let i = 1; i <= hasta; i++ ) {       
      outputFile += i === hasta ? `\t${base} X  ${i} = ${base * i}` : i < 10  ? `\t${base}  X  ${i} = ${base * i}\n ` : `\t${base} X  ${i} = ${base * i}\n ` 

      consola    += i === hasta ? `\t${base} ${'X'.cyan.bold}  ${i} ${'='.cyan.bold} ${base * i}` : i < 10  ? `\t${base} ${'X '.cyan.bold}  ${i} ${'='.cyan.bold} ${base * i}\n ` : `\t${base} ${'X'.cyan.bold}  ${i} ${'='.cyan.bold} ${base * i}\n ` 
    }    
    
    consola    += '\n==========================\n'.cyan.bold 
    outputFile += '\n==========================\n' 
 
    listar && console.log(`\n${consola}`) 
   
    const data     = new Uint8Array(Buffer.from( outputFile )) 
    
    //writeFileSync(`./salida/Tbl-${ base }X${ hasta }.txt`, data) // forma sincrona sin callback 
    writeFile(fileName, data, 'utf8', (err) => { 
      if (err) reject(err) 
      resolve( colors.cyan.bold(`\nArchivo [ ${ fileName } ] de tabla de multiplicar del "${ String(base).yellow.bold }" ha sido creado!\n`) ) 
    })        

  }) 

}  

module.exports = { fnTablaMultiplicar }
