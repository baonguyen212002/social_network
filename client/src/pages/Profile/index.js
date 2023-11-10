import { Avatar, Button, CardHeader, Grid, IconButton } from '@mui/material';
import { useState} from 'react';
import styles from '../../pages/Profile/style.module.css';
import ModalFollowed from '../../components/Modal/Modal_Followed';
import ModalFollowing from '../../components/Modal/Modal_Followeing';
import { Settings } from '@mui/icons-material';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


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
                <img className={`${styles.user}`} src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' width='150' height='150' />
                <div className={`${styles.profile_hd_detail}`}>
                    <div className={`${styles.func}`}><h3>Linh</h3>
                        <Button variant="outlined"><PersonAddAltRoundedIcon/></Button>
                        <IconButton><Settings></Settings></IconButton>
                    </div>
                    <div className={`${styles.profile_detail}`}>
                        <span><b>1</b> bài viết</span>


                        <IconButton onClick={() => handleOpenModal("followed")}>
                            <span><b>1</b> người theo dõi</span>
                        </IconButton>
                        <ModalFollowed open={isModalOpen && modalType === "followed"} onClose={handleCloseModal}/>

                        <IconButton onClick={() => handleOpenModal("following")}>
                            <span>Đang theo dõi <b>1</b> người</span>
                        </IconButton>
                        <ModalFollowing open={isModalOpen && modalType === "following"} onClose={handleCloseModal}/>
                    </div>
                </div>
            </div>
            <div className={`${styles.profile_bd}`}>
                <div className='mb-5'>
                    <span className={`${styles.profile_posts}`}>
                        <TableChartTwoToneIcon></TableChartTwoToneIcon> Bài Viết
                    </span>
                    <span className={`${styles.profile_save_posts}`}>
                        <BookmarkBorderIcon></BookmarkBorderIcon> Đã Lưu</span>
                </div>
                <Grid container spacing={4}>
                    <Grid item xs={3}>

                        <div className='post_item'>
                            <img width='100%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>
                    <Grid item xs={3}>

                        <div className='post_item'>
                            <img width='100%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>
                    <Grid item xs={3}>

                        <div className='post_item'>
                            <img width='100%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>
                    <Grid item xs={3}>

                        <div className='post_item'>
                            <img width='100%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>
                    <Grid item xs={3}>

                        <div className='post_item'>
                            <img width='100%' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' />
                        </div>
                    </Grid>
                </Grid>
                <div className='posts'>
                </div>
            </div>
        </div>
    );
}

export default Profile;