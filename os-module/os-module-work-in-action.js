
const OSModule = require("os");


// for platform and archietecture 

// console.log(OSModule.platform());   // --> will return the OS platform 

// console.log(OSModule.arch());      // will return the architecture 



// for CPU information 

// console.log(OSModule.cpus());      // returns the object containing logical cpu cores. Number of objects returned  == Number of Logical Core Available



// for network information 

// console.log(OSModule.networkInterfaces());


// for memory information 

// console.log(OSModule.freemem());         // free memory in mb's
// console.log(OSModule.totalmem());        // total memory in mb's


// for system uptime 

// console.log(OSModule.uptime());




// other useful methods are 

console.log(OSModule.homedir());      // directory of the current user

console.log(OSModule.hostname());     // will retunr the name of the device which has the OS installed

console.log(OSModule.tmpdir());      // will show the default directory for temporary files

console.log( JSON.stringify( OSModule.EOL));