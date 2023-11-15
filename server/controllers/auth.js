import { UserModel } from "../models/UserModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import validate from 'validator'
export const login = async (req, res)=>{

    try {
        const { email, password } = req.body;
        const validator = []
        if (validate.isEmpty(email)) {
          validator.push({email: 'Không bỏ trống email'})
        }else if (!validate.isEmail(email)) {
          validator.push({email: 'Email của bạn không chính xác'})
        }
        if (!validate.isLength(password,{min: 5, max: 32})) {
          validator.push({password:'Password từ 6 đến 32 kí tự'})
        }
        if (validator.length > 0) {
          return res.status(400).json({err: validator})
        }
        const user = await UserModel.findOne({ email: email })
        if (!user) {
            
            return res.status(400).json({ err: 'Tài khoản hoặc mật khẩu sai!' });
        }else {
            bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (isMatch) {
                  // Nếu mật khẩu hợp lệ, tạo JWT
                  const payload = { id: user._id, username: user.username };
      
                  jwt.sign(payload, 'abc-xyz', { expiresIn: 3600 }, (err, token) => {
                    if (err) throw err;
      
                    // Chuyển hướng sau khi đăng nhập thành công
                return res.json({ success: true, token: token, user: user._id });
                  });
                } else {
                  return res.status(400).json({ err: 'Tài khoản hoặc mật khẩu không chính xác!' });
                }
            });
        }
    } catch (error) {
        
    }
}
export const register = async (req, res) => {
    try {
      const { username, email, password, id } = req.body;
  
      // Sử dụng await khi gọi findOne để đảm bảo đợi cho đến khi hoàn thành
      const user = await UserModel.findOne({ email: email });
  
      if (user) {
        return res.status(400).json({ message: 'Email already exists', user: user });
      }
  
      const newUser = new UserModel({
        username,
        email,
        password,
        id
      });
  
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
          if (err) throw err;
  
          newUser.password = hash;
  
          try {
            const savedUser = await newUser.save();
            return res.status(200).json(savedUser);
          } catch (err) {
            console.error('Failed to save user to database', err);
            return res.status(500).json({ message: 'Internal Server Error' });
          }
        });
      });
    } catch (error) {
      console.error('Error in register function', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  export const logout = async (req, res) => {
    try {
      // Lấy token từ header hoặc từ cookie (tuỳ thuộc vào cách bạn gửi token)
      const token = req.header('Authorization').replace('Bearer ', '');
      // Kiểm tra xem token có tồn tại hay không
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      // Giải mã token để lấy thông tin user
      const decoded = jwt.verify(token, 'abc-xyz');
      // Tìm user trong cơ sở dữ liệu và xóa token
      await UserModel.findByIdAndUpdate({_id : decoded.id}, { $pull: { tokens: token } }, { new: true }, (err, user) => {
        if (err) {
          return res.status(500).json({ message: 'Internal Server Error' });
        }
        
        if (!user) {
          return res.status(401).json({ message: 'Unauthorized' });
        }
  
        return res.status(200).json({ message: 'Logout successful' });
      });
    } catch (error) {
      console.error('Error in logout function', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };