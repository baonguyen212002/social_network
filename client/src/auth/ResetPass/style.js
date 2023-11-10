import { makeStyles } from '@mui/styles';


export default makeStyles(() => ({  
    logo:{
        border: '1px solid black',
        width: 65,
        height: 65,
        borderRadius: 50,
        margin: '0 auto',
        marginTop: 20
      },
      imgcard:{
        marginTop: 5
      },
      container:{
        marginLeft: 600,
        marginTop: 70,
      },
      socical_network:{
        marginLeft: -200,
      },
      formlg:{
        height: 500,
        width : 400,
        border: "2px solid black",
      },
      listtextfieldlg:{
        marginTop: 0,
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        width: 300,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        border: 'none'
      },
      eyeposition:{
        position: 'absolute',
        right: '15%',
        top: '25%'
      },
      eyeopen:{
        display: 'none',
      },
      buttonsub:{
        width: 300,
        height: 40,
      },
      forgotpass:{
        textDecoration: 'none',
        color: 'black',
      },
      detail:{
        width: 300,
        margin: '0 auto',
        marginBottom: 70,
      },
      ques:{
        marginTop: 40,
        textAlign: 'center',    
        verticalAlign: 'middle',
        fontWeight: 'bold',
      
      },
      listtextfoot:{
        marginTop: 70,
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'relative',
      },
      linefoot:{
        content: '',
        position: 'absolute',
        background: 'black',
        height: 2,
        left: -2,
        top: -10,
        width: 400,
      },
      resetpass:{
        marginTop: 50,
        marginBottom: 50,
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      backtologin:{
        marginTop: 50,
        padding: '15px 15px',
      }
     
}));