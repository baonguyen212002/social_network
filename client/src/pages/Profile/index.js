import { Avatar, Button, Grid, IconButton, Typography } from '@mui/material';
import { useState} from 'react';
import styles from '../../pages/Profile/style.module.css';
import ModalFollowed from '../../components/Modal/Modal_Followed';
import ModalFollowing from '../../components/Modal/Modal_Followeing';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


function Profile() {

const [isModalOpen, setIsModalOpen] = useState(false);
const [modalType, setModalType] = useState("followed");

const handleOpenModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

    return (
        <div className={`${styles.profile}`}>
            <div className={`${styles.profile_hd}`}>
                <Avatar
                sx={{width:100, height:100}}
                className={`${styles.user}` }
                src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'/>
                <div className={`${styles.profile_hd_detail}`}>
                    <div className={`${styles.func}`}>
                        <Typography variant='h3'>Linh</Typography> 

                        {/* Nếu xem trang cá nhân bản thân */}
                        {/* <Button className={`${styles.btn_editfprofile}`} sx={{width: 300, height: 40}}>Chỉnh sửa trang cá nhân</Button>
                        <IconButton className={`${styles.btn_moresetting}`} ><MoreHorizIcon sx={{width: 50, height: 50}}/></IconButton> */}

                        {/* Nếu xem trang cá nhân người khác */}
                        <Button className={`${styles.btn_follow}`} sx={{width: 200, height: 40}}>Theo dõi</Button>
                        <Button className={`${styles.btn_messager}`} sx={{width: 200, height: 40}}>Nhắn tin</Button>
                        <Button className={`${styles.btn_addfr}`} sx={{width: 100, height: 40}}><GroupAddIcon /></Button>
                        

                    </div>
                    <div className={`${styles.profile_detail}`}>
                        <Button  className={`${styles.span_detail}`}>
                            <span className={`${styles.span_detail_number}`}>1</span>Bài viết
                        </Button>
                        
                        <Button className={`${styles.span_detail}`} onClick={() => handleOpenModal("followed")}>
                        <span className={`${styles.span_detail_number}`}>1</span>Người theo dõi
                        </Button>
                        <ModalFollowed open={isModalOpen && modalType === "followed"} onClose={handleCloseModal}/>

                        <Button className={`${styles.span_detail}`} onClick={() => handleOpenModal("following")}>
                            Đang theo dõi <span className={`${styles.span_detail_number}`}> 1 </span> người
                        </Button>
                        <ModalFollowing open={isModalOpen && modalType === "following"} onClose={handleCloseModal}/>
                    </div>
                </div>
            </div>

            <div className={`${styles.profile_bd}`}>
                <div className='mt-5 mb-5'>
                    <span className={`${styles.profile_posts}`}>
                        <BorderAllIcon sx={{width: 40, height: 40}}/><span>Bài Viết</span>
                    </span>
                    <span className={`${styles.profile_save_posts}`}>
                        <BookmarkBorderIcon sx={{width: 40, height: 40}}/><span>Đã Lưu</span></span>
                </div>
                <Grid container spacing={6}>

                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className='post_item'>
                            <img width='80%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>
                    
                </Grid>
            </div>
        </div>
    );
}

export default Profile;