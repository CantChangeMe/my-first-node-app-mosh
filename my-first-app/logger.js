const EventEmitter = require('events');

class Logger extends EventEmitter{

    log(message){
       // console.log(message);
        this.emit('voice',{id:'1',url:'http://www.fdfd.com'});
    }
}
module.exports =Logger;
