const { v4: uudiv4 } = require('uuid');

class Tarea {
    id = '';
    desc = '';
    completeIn = null;
    
    constructor(desc) {

        this.id = uudiv4();
        this.desc = desc;
        this.completeIn = null;
    }
}

module.exports = Tarea;