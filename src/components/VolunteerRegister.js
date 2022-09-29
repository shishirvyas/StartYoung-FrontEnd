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

export default function VolunteerRegister() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const [firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[mobileNumber,setMobile]=useState('')
    const[email,setEmail]=useState('')
    const[type,setType]=useState('')
    const[volunteer,setvolunteer]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const volunteer={firstName,lastName,mobileNumber,email,type}
    console.log(volunteer)
    fetch("http://localhost:8090/api/regvolunteer",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(volunteer)

  }).then(()=>{
    setFirstName('');
    setLastName('');
    setMobile('');
    setEmail('');
    setType('');
    console.log("New User added")
  })
}

// useEffect(()=>{
//   fetch("http://localhost:8090/api/loginUser")
//   .then(res=>res.json())
//   .then((result)=>{
//     setvolunteer(result);
//   }
// )
// },[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Register as Volunteer</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth 
      value={firstName}
      onChange={(e)=>setFirstName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Mobile Number" variant="outlined" fullWidth
      value={mobileNumber}
      onChange={(e)=>setMobile(e.target.value)}
      />
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Type" variant="outlined" fullWidth
      value={type}
      onChange={(e)=>setType(e.target.value)}
      />
  
  

      <Button variant="contained" color="primary" onClick={handleClick}>
  Become a volunteer
</Button>
    </form>
   
    </Paper>
  
    </Container>
  );
}
