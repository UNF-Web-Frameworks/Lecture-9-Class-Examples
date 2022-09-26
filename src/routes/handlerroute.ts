import express from 'express';
let handlerRoute = express.Router();
let dogArray:{name:string,address:string,salary:number}[]=[];

handlerRoute.get('/',(req,res,next)=>{
    return res.send(dogArray);
});

handlerRoute.post('/',(req,res,next)=>{
    dogArray.push(req.body);
    res.send(dogArray);
});

handlerRoute.patch('/:name',(req,res,next)=>{
    
    dogArray.push(req.body);
    res.send(dogArray);
});

handlerRoute.delete('/:name',(req,res,next)=>{
    
    res.send(dogArray);
});

export {handlerRoute};