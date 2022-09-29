import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function UserSignUp() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const [firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[mobileNumber,setMobile]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[students,setStudents]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const student={firstName,lastName,mobileNumber,email,password}
    console.log(student)
    fetch("http://localhost:8090/api/signup",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    setFirstName('');
    setLastName('');
    setMobile('');
    setEmail('');
    setPassword('');
    console.log("New User added")
  })
}

// useEffect(()=>{
//   fetch("http://localhost:8090/api/loginUser")
//   .then(res=>res.json())
//   .then((result)=>{
//     setuser(result);
//   }
// )
// },[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Sign Up</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth 
      value={firstName}
      onChange={(e)=>setFirstName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Mobile" variant="outlined" fullWidth
      value={mobileNumber}
      onChange={(e)=>setMobile(e.target.value)}
      />
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth type='password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
  
  
      
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
  
    </Container>
  );
}
