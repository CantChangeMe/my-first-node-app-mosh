const Logger  = require('./logger');
const logger = new Logger();
//logger.log('voice');

logger.on('voice', (args)=>{
    console.log('HII',args);
});

logger.log('voice');