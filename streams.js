const fs =require('fs')

const readStream=fs.createReadStream('./docs/newfiles.txt');

readStream.on('data',(buffer)=>{
    console.log('\n\n New Chunk Received \n\n');
    console.log(buffer.toString());
})

const fs1=require('fs')

const writeStream=fs1.WriteStream('./docs/copynewfiles.txt');
readStream.on('data',(buffer)=>{
    writeStream.write(buffer);
})

//if the work is to only read and write
readStream.pipe(writeStream)