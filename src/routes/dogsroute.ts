import express from 'express';
let dogRoute = express.Router();
let dogArray:{name:string,breed:string,age:number}[]=[];

dogRoute.get('/',(req,res,next)=>{
    return res.send(dogArray);
});

dogRoute.post('/',(req,res,next)=>{
    dogArray.push(req.body);
    res.send(dogArray);
});

dogRoute.patch('/:name',(req,res,next)=>{
    
    dogArray.push(req.body);
    res.send(dogArray);
});

dogRoute.delete('/:name',(req,res,next)=>{
    
    res.send(dogArray);
});

export {dogRoute};