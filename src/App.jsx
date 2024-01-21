import React, { useState } from "react";
import './index.css'
export default function Form(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
     

    function firstNameHandel(e){
          setFirstName(e.target.value);
    }
    function lastNameHandel(e){
        setLastName(e.target.value);
    }
    function phoneNumberHandel(e){
    setPhoneNumber(e.target.value);
    }
    function emailHandel(e){
    setEmail(e.target.value);
    }

    function handelReset(){
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
    }
    return(<>
    <h1 id="text">Simple Form</h1>
       <form id="form" >

        <input type="text" placeholder="Enter the first name"
        value={firstName}
        onChange={firstNameHandel}/>
         <br/>
         <br/>
        <input type="text" placeholder="Enter the last name"
        value={lastName}
        onChange={lastNameHandel}/>
          <br/>
         <br/>
         <input type="text" placeholder="Enter the phone number"  minLength={0} maxLength={10}
        value={phoneNumber}
        onChange={phoneNumberHandel}/>
        <br/>
        <br/>
        <input type="text" placeholder="Enter email Id"
        value={email}
        onChange={emailHandel}/>

        <h1>Name: {firstName} {lastName}</h1>
        <h1>Phone Number: {phoneNumber}</h1>
        <h1>Email Id: {email}</h1>
        
        <button id="reset" onClick={handelReset}>Reset</button>

       </form>
    </>)
}