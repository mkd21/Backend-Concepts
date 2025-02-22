

const buffer = Buffer.from("learn");   // creates a buffer with 5 bits of storage

// console.log(buffer);       // will console the data in the form of binary

// console.log(buffer.toString());    // will change the data into string 

buffer.write("we are");           // will store only 5 characters, as the storage is already allocated above
// console.log(buffer.toString());


const buffer2 = Buffer.alloc(5);         // this is also a way to allocate the space into buffer

// console.log(buffer2);


