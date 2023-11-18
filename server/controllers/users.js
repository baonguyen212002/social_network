import { BioModel } from "../models/BioModel.js";
import { UserModel } from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        // test Data
        // const user = new UserModel({
        //     id: 2,
        //     username: 'Nguyễn Văn B',
        //     password: '123456',
        //     email: 'B@mail.com',
        // });
        // user.save();

        const users = await UserModel.find();
        console.log('users', users);
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const createUser = async (req, res) => {
    try {
        const NewUser = req.body;

        const users = new UserModel(NewUser);
        await users.save();

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({error: err});
    }
};

export const getUserUpdate=async(req, res)=>{
    try {
        const user = await BioModel.find({user_id: req.user.id});
        res.status(200).json(user);
        
    } catch (err) {
        res.status(500).json({error: err});
        
    }
}
export const updateUser=async(req, res)=>{
    try {
        const data= req.body.data
        const data2 = {...data, user_id: req.user.id}
        let user=''
        const check = await BioModel.find({user_id: req.user.id});
        if (check) {
            console.log(data2);
             user = await BioModel.findOneAndUpdate({user_id: req.user.id}, data2,{new: true});
            
            }else{
                user = new BioModel(data2)
                await user.save()
            }
            res.status(200).json(user);
        
    } catch (err) {
        res.status(500).json({error: err});
        
    }
}
export const search=async(req, res)=>{
    try {
        const data= req.body.data
        const users = await UserModel.find({ username: { $regex: data, $options: 'i' } });
            res.status(200).json(users);
        
    } catch (err) {
        res.status(500).json({error: err});
        
    }
}
// export const updateUser = async (req, res) => {
//     try {
//         const updateUser = req.body;

//         const users = await UserModel.findOneAndUpdate(
//             {user_id: updatePost.user_id}, 
//             updatePost, 
//             {new: true}
//         );

//         res.status(200).json(users);

//     } catch (error) {
//         res.status(500).json({error: err});
//     }
// };