import express from 'express';


const app = express();

app.get('/ping', (req,res)=>{
    res.send("pong");
});

app.get('/mascota', (req,res)=>{
    res.json([]);
});

app.post('/mascota',(req,res)=>{
    res.json({});
})




export default app;