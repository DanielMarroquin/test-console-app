const Task = require('./tarea')

class Tareas {
    _listado = {};

    get listArr () {
        const list  = [];
        Object.keys(this._listado).forEach( key => {
            const task = this._listado[key];
            list.push(task);
        });

        return list;
    }


    constructor() {
        this._listado = {};
    }

    deleteTask (id = '') {
        if ( this._listado[id] ) {
            delete this._listado[id];
        }
    }


    loadTaskfromArr (tasks = [] ){
        tasks.forEach(task => {
            this._listado[task.id] = task;
            console.log(tasks, 'tests')
        });
    }

    crearTarea(desc = '' ) {
        const tarea = new Task(desc);
        this._listado[tarea.id] = tarea;
    
    }

    listAllTasks () {
        console.log();
        this.listArr.forEach( (task, i) => {
            const idx = `${i + 1}`.white;
            const { desc, completeIn } = task;
            const status = ( completeIn )
                            ? 'Completada'.green
                            : 'Pendiente'.red;

            console.log(`${idx}. ${desc} :: ${status} `);
        });
    }

    listTasksCompletePending ( complete = true ) {
        console.log();
        let index = 0;
        this.listArr.forEach( task => {
            const { desc, completeIn } = task;
            const status = ( completeIn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            if (complete) {
                //Muestra tareas completas
                if ( completeIn ) {
                    index += 1;
                    console.log(`${(index + '.').green} ${desc} :: ${completeIn.green} `);
                }
            } else {
                //Muestra pendientes
                if ( !completeIn ) {
                    index += 1;
                    console.log(`${(index + '.').green} ${desc} :: ${status} `);
                }
            }
        })
    }

    toggleComplete ( ids = []) {
        ids.forEach( id => {
            const task = this._listado[id];
            if ( !task.completeIn) {
                task.completeIn = new Date().toISOString();
                console.log('Ha completado su tarea'.yellow); 
            }
        });

        this.listArr.forEach(task => {
            if ( !ids.includes(task.id) ) {
                this._listado[task.id].completeIn = null;
            }
        })
    }

}

module.exports = Tareas;