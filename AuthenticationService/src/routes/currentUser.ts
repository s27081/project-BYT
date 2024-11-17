import express from 'express';
import jwt from 'jsonwebtoken';



const router = express.Router();

router.get('/api/users/currentuser',  (req, res):any =>{

    if(!req.session?.jwt){
        return res.send({currentUser: null});
    }
    try{
        const payload = jwt.verify(req.session.jwt, String(process.env.JWTKEY));
        res.send({currentUser: payload});
    } catch (err){
        res.send({currentUser: null});
    }
    

});

export {router as currentUserRouter};