import connect from "@/db/conn";
import User from '@/models/userSchema'; 

connect();

export default async function handler(req, res) {
    try {
        const user = await User.create(req.body);
        res.redirect('/');
        if (!user) {
            return res.json({ error: "user not created" });
        } // <- Missing closing curly brace for the if statement
    } catch (e) {
        res.status(400).json({ status: "Not able to create a new user" });
    }
}
