import { UserModel } from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        
        const users = await UserModel.find();
        console.log('users', users);
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const checkUser = async (req, res) => {

    const {email,password,username} = req.body;

    try {
        
        // Tìm kiếm email, username trong UserModal
        const checkUser = await UserModel.findOne({email:email, username:username});
        
        if(checkUser){
            // Trả về đã tồn tại nếu xuất hiện trong UserModal
            res.json('exist'); 
        }
        else {
            // Trả về chưa tồn tại nếu không xuất hiện trong UserModal
            res.json('notexist');
        }
        

    } catch (error) {
        res.status(500).json({error: err});
    }
};

export const creatUser = async (req, res) => {

    const {email,password,username} = req.body;
    const data = {
        email:email,
        password:password,
        username:username
    };
  
    try {
        
        const checkUser = await UserModel.findOne({email:email, username:username});
        
        if(checkUser){
            res.json('exist');
        }
        else {
            res.json('notexist');
            await UserModel.insertMany([data]);
        }
        

    } catch (error) {
        res.status(500).json({error: err});
    }
};

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