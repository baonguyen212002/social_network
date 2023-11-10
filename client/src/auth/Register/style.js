import { makeStyles } from '@mui/styles';


export default makeStyles(() => ({  
    container:{
        marginLeft: 550,
        marginTop: 100,
      },
      socical_network:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      },
      formlg:{
        height: 500,
        width : 400,
        border: "2px solid black",
      },
      listtextfieldlg:{
        marginTop: 20,
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: 10,
      },
      listtextfieldpass:{
        marginTop: 20,
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      },
      textfieldlg:{
        paddingLeft: 10,
        // marginTop: 10,
        width: 300,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        border: 'none'
        // borderBottom: 'none'
      },
      eyeposition:{
        // content: '',
        position: 'absolute',
        right: '15%',
        top: '25%'
      },
      eyeopen:{
        display: 'none',
      },
      buttonregis:{
        // marginTop: 20,
        width: 300,
        height: 40,
      },
      forgotpass:{
        textDecoration: 'none',
        color: 'black'
      },
      detail:{
        width: 270,
        margin: '0 auto',
      },
      title:{
        textAlign: 'center',     // Canh giữa chiều ngang
        verticalAlign: 'middle', // Canh giữa chiều dọc
        height: '100%',
      }
 
}));