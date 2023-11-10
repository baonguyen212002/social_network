import { makeStyles } from '@mui/styles';


export default makeStyles(() => ({
    Following: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 500,
        height: 600,
        transform: 'translate(-50%, -50%)',
        background: 'white',
        border: '2px solid #000',
        boxShadow: 24,
    },
    searchHeader: {
        position: 'relative',
        height: 100,
        paddingBottom: 100,
    },
    btnClose: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    text_following: {
        position: 'absolute',
        width:200,
        textAlign: 'center',
        top: 10,
        left: 'calc(50% - 100px)',
    },
    p_following: {
        fontSize: 24,
        fontWeight: 500,
    },
    searchField: {
        position: 'absolute',
        width: 400,
        top: 60,
        left: 'calc(50% - 200px)',
        opacity: 0.5,
    },
    icon_searh: {
        position: 'absolute',
        width: 10,
        height: 10,
        top: 5,
        left: 5,
    },
    input_Search: {
        paddingLeft: 30,
        width: '100%',
        borderRadius: 5,
    },
    content: {
        width: '100%',
        height: 500,
        overflowY: 'scroll',
        padding: 20,

        // border: '1px solid black',
    },
    //Css User
    User: {
        position: 'relative',
        padding: 10,
    },
    avatarUser: {
        position: 'absolute',
        border: '2px solid black',
        top: '10%',
    },
    username: {
        position: 'absolute',
        top: '25%',
        left: '20%',
        fontSize: 18,
        fontWeight: 'bold',
    },
    fullname: {
        position: 'absolute',
        top: '50%',
        left: '20%',
        fontSize: 18,
        color: 'black',
        opacity: 0.5,
    },
    btn_following: {
        width: 150,
        height: 35,
        backgroundColor: '#0095F6',
        border: 'none',
        color: 'white',
        fontSize: 20,
        padding: '0 10px 0 10px',
        borderRadius: 5,
    },
    btn_follow: {
        width: 150,
        height: 35,
        backgroundColor: '#858E95',
        border: 'none',
        color: 'white',
        fontSize: 20,
        padding: '0 10px 0 10px',
        borderRadius: 5,
    },
}));