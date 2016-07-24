// cron cannot go less that 1 minute task run times.
var cron = require('node-cron');

var schedualTasks = function(){};

cron.schedule('* * * * *', function() {
    console.log('will execute every minute until stopped');
});

// Does not need to export back.