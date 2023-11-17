import { Avatar, Button, CardHeader, MenuItem, Select, TextField, TextareaAutosize, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import classess from './style.module.css'
import axios from 'axios';
function UpdateProfile() {
    const [user, setUser] = useState()
    const [data, setData] = useState({
        gender: '',
        birthday: '',
        fullname: '',
        introduct: ''
    })
    useEffect(()=>{
        const bearerToken = localStorage.getItem('auth_token');
        const headers = {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
    
    };
        axios.post('http://localhost:5000/users/update/get-user',{data: ''}, {headers: headers})
        .then(user=>{
            setUser(user.data[0])
        })
        .catch(error=>{
            console.log(error);
        })
        console.log(user);
    },[])
    const handleSubmit = useCallback(()=>{
        const bearerToken = localStorage.getItem('auth_token');
        const headers = {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
    
    };
        axios.post('http://localhost:5000/users/update',{data: data}, {headers: headers})
        .then(user=>{
            setUser(user)
        })
        .catch(error=>{
            console.log(error);
        })
        console.log(user);
    },[data])
    return (
        <div className={`${classess.update_profile} mt-5`}>
            <div>
            <Typography variant='h4'>Chỉnh Sửa Trang Cá Nhân</Typography>
            <div style={{textAlign: 'center', margin: '0 auto'}}><CardHeader className={`${classess.card}`}
                avatar={<Avatar className={`${classess.user}`}><img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' /></Avatar>}
                title={'Linh'}
                subheader="Thay đổi ảnh đại diện"
              /></div>
        <label htmlFor='username'>
            <span>Tên người dùng</span>
           <input value={user? user.fullname: ''} onChange={e=> setData({...data, fullname: e.target.value})}  id='username'/>
        </label>
        <label htmlFor='gt'>
            <span>Giới tính</span>
            <select onChange={e=> setData({...data, gender: e.target.value})} id='gt'>
                <option>Nam</option>
                <option>Nữ</option>
                <option>Khác</option>
            </select>
        </label>
        <label htmlFor='birthday'>
            <span>Ngày sinh</span>
            <input value={user? user.birthday: ''} onChange={e=> setData({...data, birthday: e.target.value})} type='datetime-local' id='birthday'/>
        </label>
        <label htmlFor='username'>
            <span>Giới thiệu</span>
            <textarea onChange={e=> setData({...data, introduct: e.target.value})}>{user? user.introduct: ''}</textarea>
        </label>
            <Button onClick={handleSubmit} style={{width: '50px'}} variant='outlined'>Lưu</Button>
            </div>
        </div>
    );
}

export default UpdateProfile;