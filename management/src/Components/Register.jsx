import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {register} from "../Redux/Register/action";
import styled from 'styled-components'



const RegisterBox = styled.div`
width: 350px;
height: 300px%;
margin: auto;
margin-top: 10%;
background-color: #f5f5f5;
border-radius: 10px;
padding: 10px;
`


export const Register=()=>{
    const navigate =useNavigate();
    const [name , setname] = useState('');
    const [password,setPassword]=useState('');
    const [email,setemail] = useState('');

    const dispatch = useDispatch();
    const {isAuthenticated} = useSelector((store) => store.login);
     
    const handleregister=()=>{
        return <Navigate to="/login"/>
        const payload={
            name,
            email,
            password
        } 
        dispatch(register(payload))
        navigate("/login")
    }
    
    

    return(
        <RegisterBox>
        <div style={{
            backgroundColor:'#f5f5f5',
            fontSize:'20px',
        }}>
          
            <input type="text" placeholder=" Enter name" value={name} onChange={(e)=>{
               setname(e.target.value)
           }}/><br/> <br />
        
            <input type="text" placeholder=" Enter username" value={email} onChange={(e)=>{
               setemail(e.target.value)
           }}/><br/> <br />
        
             <input type="text" placeholder=" Enter password" value={password} onChange={(e)=>{
               setPassword(e.target.value)
           }}/><br/> <br />
        
             <button onClick={handleregister}>SIGN UP</button>
             
        </div>
        </RegisterBox>
    )
}