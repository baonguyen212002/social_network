import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({

    //body thẻ Comment
    content_post: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 1200,
        height: 700,
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
    },
    //Poster
    posterSticky: {
        position: '-webkit-sticky',
        position: 'sticky',
        top: 0,

        // border: '1px solid red',
    },
    // Nội dung người dùng comment
    content: {
        width: '100%',
        height: 475,
        overflowY: 'scroll',


        // border: '1px solid black',
    },
    // Phần nhập nội dung comment
    inputSticky: {
        position: '-webkit-sticky',
        position: 'sticky',
        bottom: 0,

        height: 150,
        // border: '1px solid #4CAF50',
    },
    //Từng thẻ comment của các User
    userComment: {
        paddingBottom: 80,
    },
    // Content của bài comment
    img_post: {
        height: 700,
    },
    // Thanh trạng thái của Poster
    Poster: {
        position: 'relative',
        height: 70,
    },
    avatar_poster: {
        border: '2px solid black',
        margin: 10,
    },
    namePoster: {
        position: 'absolute',
        top: 17,
        left: '20%',
        fontSize: 24,
        fontWeight: 'bold',
    },
    statusPoster: {
        position: 'absolute',
        fontSize: 14,
        top: 25,
        left: '60%',
        opacity: 0.5,
    },
    btnSettingPoster: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
    // Thanh trạng thái comment của User
    User: {
        position: 'relative',
        paddingTop: 10,
    },
    userInfo: {
        position: 'relative',
    },
    avatarUser: {
        position: 'absolute',
        top: '20%',
        left: '3%',
    },
    nameUser: {
        position: 'absolute',
        paddingTop: 10,
        left: '15%',
        fontWeight: 'bold',
        fontSize: 18,
    },
    commentBody: {
        position: 'relative',
    },
    commentUser: {
        position: 'absolute',
        top: 35,
        left: '15%',
    },
    commentContent: {
        position: 'absolute',
        fontSize: 16,
    },
    likeComment: {
        position: 'absolute',
        top: 35,
        left: '90%',
    },
    statusUser: {
        position: 'absolute',
        left: '15%',
        top: 60,
        fontSize: 12,
        opacity: 0.5,
    },
    likeCount: {
        position: 'absolute',
        top: 60,
        left: '35%',
        fontSize: 12,
        opacity: 0.5,
    },
    reply: {
        position: 'absolute',
        top: 55,
        left: '70%',
    },
    btnReply: {
        fontSize: 12,
        color: 'black',
        opacity: 0.5,
        fontWeight: 'bold',
        textDecoration: 'none',
    },
    borderBottom: {
        borderBottom: '2px solid black',
        opacity: 0.5,
    },
    borderTop: {
        borderTop: '2px solid black',
        opacity: 0.5,
    },
    inputComment: {
        position: 'relative',
    },
    input_btnLike: {
        position: 'absolute',
        left: '5%',
    },
    input_btnComment: {
        position: 'absolute',
        left: '20%',
    },
    input_btnShare: {
        position: 'absolute',
        left: '35%',
    },
    input_btnSave: {
        position: 'absolute',
        right: '5%',
    },
    input_statLikeCount: {
        position: 'absolute',
        top: 50,
        left: '5%',
    },
    input_status: {
        position: 'absolute',
        top: 50,
        left: '30%',
    },
    p_input: {
        color: 'black',
        opacity: 0.5
    },
    input_avataComment: {
        position: 'absolute',
        top: 90,
        left: 10,
    },
    input_commentContent: {
        position: 'absolute',
        top: 95,
        left: '15%',
    },
    //Css cho input
    input_Content: {
        width: 300,
        height: 40,
    },
    input_Submit: {
        position: 'absolute',
        top: 95,
        right: 45,
    },
    a_Submit: {
        textDecoration: 'none',
        color: '#08B2FB',
        fontSize: 28,
        fontWeight: 'bold'
    },
}));
