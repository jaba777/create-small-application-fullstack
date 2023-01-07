import {db} from '../db.js';
import bcrypt from 'bcryptjs';

export const register=(req,res)=>{

    const q= "SELECT * FROM users WHERE email = ? OR username = ?";
    const email=req.body.email;
    const username=req.body.username;

    db.query(q,[email,username],(err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exists!")

        //Hash the password and create user

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync( req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?,?,?)";

        const email=req.body.email;
        const username=req.body.username;
        

        db.query(q,[username,email,hash],(err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("User has been created.");
        })
        

    })

}

export const login=(req,res)=>{
    
}

export const logout=(req,res)=>{
    
}