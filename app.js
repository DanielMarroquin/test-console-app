require ('colors');

const {inquirerMenu, pauseInquirer, readInput, deleteTasks, deleteConfirm, chelistTasks } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFiles');
const Tareas = require('./models/tareas');


const main = async() => {
    console.clear();
    let opt = '';
    const tareas = new Tareas();
    const tasksDB = readDB();

    if ( tasksDB ) { //Cargar tareas
        tareas.loadTaskfromArr(tasksDB);
    }

    do {
        //Funcion imprime Menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1': //Crear tarea
                const desc = await readInput('Descripción: ');
                tareas.crearTarea(desc);
            break;

            case '2': //Listar tareas
                tareas.listAllTasks();
            break;

            case '3': // Listar tareas resueltas
                tareas.listTasksCompletePending(true);
            break;

            case '4': //Listar tareas pendientes
                tareas.listTasksCompletePending(false);
            break;

            case '5': //Funcion para completar tareas
                const ids = await chelistTasks(tareas.listArr);
                tareas.toggleComplete( ids );
            break;

            case '6': // Borrar tareas
                const id = await deleteTasks(tareas.listArr);               
                if ( id !== '0') {
                    const ok = await deleteConfirm('¿Está seguro de eliminar tarea?');
                    if ( ok ) {
                        tareas.deleteTask(id);
                        console.log('Tarea Eliminada Exitosamente');
                }
            }
            break;
        }

        saveDB(tareas.listArr);

        await pauseInquirer();

    } while (opt !== '0');

    // mostratMenu();
    // pause();
}

main();