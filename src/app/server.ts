import type { Server } from 'http';
import app from './app.js'
const PORT:number =500;



 let server:Server;
 async function bootstrap(){

     server = app.listen(PORT,()=>{
         console.log("running on ",PORT)
     })
 }
 bootstrap()