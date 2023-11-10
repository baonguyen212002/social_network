import { makeStyles } from '@mui/styles';


export default makeStyles(() => ({
  container:{
    marginLeft: 400,
    marginTop: 150,
  },
  logo:{
    marginTop: 50,
    marginLeft: -50,
  },
  socical_network:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  formlg:{
    height: 400,
    width : 400,
    border: "2px solid black",
  },
  register:{
    marginTop: 15,
    height: 50,
    width : 400,
    border: "2px solid black",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 10,
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
    top: '35%'
  },
  eyeopen:{
    display: 'none',
  },
  formcheckbox:{
    marginLeft: 50,
    marginTop: 10,
  },
  buttonlogin:{
    width: 300,
    height: 40,
  },
  forgotpass:{
    textDecoration: 'none',
    color: 'black'
  }
 
}));