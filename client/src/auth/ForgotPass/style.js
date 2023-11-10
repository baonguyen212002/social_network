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
  },
  ques:{
    // margin: '0 auto',
    marginTop: 10,
    textAlign: 'center',     // Canh giữa chiều ngang
    verticalAlign: 'middle',
    fontWeight: 'bold',
  },
  textor:{
    marginTop: 40,
    textAlign: 'center',
    position: 'relative'
  },
  lineleft:{
    left: 50,
    top: 12,
    content: '',
    position: 'absolute',
    background: 'black',
    height: 1,
    width: 120,
  },
  lineright:{
    right: 50,
    top: 12,
    content: '',
    position: 'absolute',
    background: 'black',
    height: 1,
    width: 120,
  },
  listtextfoot:{
    marginTop: 25,
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
  }
 
}));