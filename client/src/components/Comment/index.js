import React from "react";
import useStyles from "./style.js";
import { Link } from 'react-router-dom';
import { Avatar, Card, CardMedia, Grid, IconButton, Button } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


//Sử dụng modal để làm nổi bật comment
//https://mui.com/material-ui/react-modal/
export default function Comment() {
    const classes = useStyles();

    const statusPoster = (
        <div>
            <div className={classes.Poster}>
                <div className="row">
                    <div className="col-md-3">
                        <Avatar
                            sx={{ width: 50, height: 50 }}
                            alt="Messi"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"

                            className={classes.avatar_poster}
                        />
                    </div>

                    <div className="col-md-6">
                        <p className={classes.namePoster}>Messi</p>
                    </div>

                    <div className="col-md-2">
                        <p className={classes.statusPoster}>Online</p>
                    </div>

                    <div className="col-md-1">
                        <div className={classes.btnSettingPoster}>
                            <SettingsIcon></SettingsIcon>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.borderBottom}></div>
        </div>
    );

    const statusUser = (
        <div className={classes.userComment}>
            <div className={classes.User}>
                <div className={classes.userInfo}>
                    <div className={classes.avatarUser}>
                        <Avatar
                            alt="User1"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCffxOKRLn21jLPSYrtR5knqhMJ7jWsq9EQ&usqp=CAU" />
                    </div>

                    <div className={classes.nameUser}>
                        <p >User 1</p>
                    </div>
                </div>

                <div className={classes.commentBody}>
                    <div className={classes.commentUser} >
                        <p>Comment ở đây nè</p>
                    </div>

                    <div className={classes.likeComment} >
                        <FavoriteBorderIcon />
                    </div>

                    <div className={classes.statusUser}>
                        <p>1 giờ trước</p>
                    </div>

                    <div className={classes.likeCount}>
                        <p>1k lượt thích</p>
                    </div>

                    <div className={classes.reply}>
                        <a className={classes.btnReply} href="#">Trả lời</a>
                    </div>
                </div>
            </div>
        </div>
    );

    const inputComment = (
        <div className={classes.inputComment}>
            <div className={classes.borderTop}></div>

            <div className={classes.input_btnLike}>
                <FavoriteBorderIcon sx={{ width: 40, height: 40 }}></FavoriteBorderIcon>
            </div>

            <div className={classes.input_btnComment}>
                <MapsUgcIcon sx={{ width: 40, height: 40 }}></MapsUgcIcon>
            </div>

            <div className={classes.input_btnShare}>
                <SendIcon sx={{ width: 40, height: 40 }}></SendIcon>
            </div>

            <div className={classes.input_btnSave}>
                <BookmarkBorderIcon sx={{ width: 40, height: 40 }}></BookmarkBorderIcon>
            </div>

            <div className={classes.input_statLikeCount}>
                <p className={classes.p_input}>2k lượt thích</p>
            </div>

            <div className={classes.input_status}>
                <p className={classes.p_input}>2 tiếng trước</p>
            </div>

            <div className={classes.input_avataComment}>
                <Avatar
                    sx={{ width: 50, height: 50, border: '2px solid black' }}
                    alt="User1"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCffxOKRLn21jLPSYrtR5knqhMJ7jWsq9EQ&usqp=CAU" />
            </div>

            <div className={classes.input_commentContent}>
                <input className={classes.input_Content} type="text" ></input>
            </div>

            <div className={classes.input_Submit}>
                <a className={classes.a_Submit} href="#">Đăng</a>
            </div>
        </div>
    );

    const contentRight = (
        <div className={classes.contentRight}>
            <div className={classes.posterSticky}>
                {statusPoster}
            </div>

            <div className={classes.content}>
                {statusUser}{statusUser}
                {statusUser}{statusUser}
                {statusUser}{statusUser}
                {statusUser}{statusUser}
                {statusUser}{statusUser}
                {statusUser}{statusUser}
                {statusUser}{statusUser}
                {statusUser}{statusUser}
                {statusUser}{statusUser}
                {statusUser}{statusUser}

            </div>

            <div className={classes.inputSticky}>
                {inputComment}
            </div>
        </div>
    );

    const contentLeft = (
        <CardMedia
            image={'https://media.cnn.com/api/v1/images/stellar/prod/230908103500-01-lionel-messi-argentina-ecuador.jpg?c=16x9&q=h_720,w_1280,c_fill'}
            title="Content-comment-img"

            className={classes.img_post}
        />
    );
    return (
        <div>
            <Card variant="outlined" spacing={2} className={classes.content_post}>
                <Grid container spacing={0}>

                    <Grid item md={7}>
                        {contentLeft}
                    </Grid>

                    <Grid item md={5}>
                        {contentRight}
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}