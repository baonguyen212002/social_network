import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@mui/material";
import { NoAccounts } from "@mui/icons-material";
import styles from "../Followed/style.module.css";

function Followed() {
    
    const UserFollow = (
        <div className={`${styles.User}`}>
            <Avatar
                src={NoAccounts}
                className={`${styles.avatarUser}`} />

            <p className={`${styles.username}`}>Username</p>
            <p className={`${styles.fullname}`}>Fullname</p>
            <button className={`${styles.btn_follow}`}>Xóa</button>
        </div>
    );

    const UserFollowing = (
        <div className={`${styles.User}`}>
            <Avatar
                src={NoAccounts}
                className={`${styles.avatarUser}`} />

            <p className={`${styles.username}`}>Username</p>
            <p className={`${styles.fullname}`}>Fullname</p>
            <button className={`${styles.btn_following}`}>Đang theo dõi</button>
        </div>
    );

    const searchHeader = (
        <div className={`${styles.searchHeader}`}>

            <div className={`${styles.text_following}`}>
                <p className={`${styles.p_following}`}>Theo dõi</p>
            </div>

            <div className={`${styles.searchField}`}>
                <SearchIcon className={`${styles.icon_searh}`}></SearchIcon>
                <input className={`${styles.input_Search}`} type="text" placeholder="Tìm kiếm"></input>
            </div>
        </div>
    );

    return (
        <div className={`${styles.Following}`}>
            <div>
                {searchHeader}
            </div>

            <div className={`${styles.content}`}>
                {UserFollow}{UserFollowing}
                {UserFollowing}{UserFollowing}
                {UserFollowing}{UserFollowing}
                {UserFollow}{UserFollowing}
                {UserFollowing}{UserFollowing}
                {UserFollowing}{UserFollowing}
                {UserFollow}{UserFollowing}
            </div>
        </div>
    );
}

export default Followed;