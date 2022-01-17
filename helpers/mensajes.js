const { resolve } = require('path');

require('colors');


const mostratMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('================================'.green);
        console.log('      Seleccione una opción     '.yellow);
        console.log('================================\n'.green);

        console.log(`${'1.'.yellow} Crear tarea`);
        console.log(`${'2.'.yellow} Listar tareas`);
        console.log(`${'3.'.yellow} Listar tareas resueltas`);
        console.log(`${'4.'.yellow} Listar tareas pendientes`);
        console.log(`${'5.'.yellow} Completar tarea(s)`);
        console.log(`${'6.'.yellow} Borrar tarea`);
        console.log(`${'0.'.yellow} Salir\n`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una opción: ', (opt) => {
            readLine.close();
            resolve(opt);
        })
    })


}

const pauseMessage = () => {

    return new Promise (resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question(`\nPresione ${'ENTER'.green} para continuar`, (opt) => {
            readLine.close();
            resolve();
        })
    })

}


module.exports = {
    mostratMenu,
    pauseMessage
}