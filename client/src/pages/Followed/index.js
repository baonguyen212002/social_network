import React from "react";
import useStyles from './style';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@mui/material";
import { NoAccounts } from "@mui/icons-material";

function Followed() {
    const classes = useStyles();

    const User = (
        <div className={classes.User}>
            <Avatar
                src={NoAccounts}
                className={classes.avatarUser} />

            <p className={classes.username}>Username</p>
            <p className={classes.fullname}>Fullname</p>
        </div>
    );

    const Follow = (
        <div>
            <div className="row">
                <div className="col-md-8">
                    {User}
                </div>

                <div className="col-md-4 pt-3">
                    <button className={classes.btn_follow}>Xóa</button>
                </div>
            </div>
        </div>
    );

    const Following = (
        <div className="row">
            <div className="col-md-8">
                {User}
            </div>

            <div className="col-md-4 pt-3">
                <button className={classes.btn_following}>Đang theo dõi</button>
            </div>
        </div>
    );
    const searchHeader = (
        <div className={classes.searchHeader}>
            <div className={classes.btnClose}>
                <CloseIcon/>
            </div>

            <div className={classes.text_following}>
                <p className={classes.p_following}>Theo dõi</p>
            </div>

            <div className={classes.searchField}>
                <SearchIcon className={classes.icon_searh}></SearchIcon>
                <input className={classes.input_Search} type="text" placeholder="Tìm kiếm"></input>
            </div>
        </div>
    );

    return (
        <div className={classes.Following}>
            <div>
                {searchHeader}
            </div>

            <div className={classes.content}>
                
            </div>
        </div>
    );
}

export default Followed;