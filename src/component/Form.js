import React, { useState } from "react";
import "./Form.css";
function FormExample(props) {

  const [data, setData] = useState({
    fname: "",
    lname: "",
    bankBranch: "",
    accNo : "",
    mob: "",
    email: "",
    address: "",
    country: "India"
  });

  const changeHandler = (event) => {

    if(event.target.name === "firstname")
    {
      setData((prevItems) => {
        return {...prevItems,
        fname: event.target.value
        }
      });
    }
    if(event.target.name === "lastname")
    {
      setData((prevItems) => {
        return {...prevItems,
        lname: event.target.value
        }
      });
    }
    if(event.target.name === "Bank Branch")
    {
      setData((prevItems) => {
        return {...prevItems,
        bankBranch: event.target.value
        }
      });
    }
    if(event.target.name === "Account No.")
    {
      setData((prevItems) => {
        return {...prevItems,
        accNo: event.target.value
        }
      });
    }
    if(event.target.name === "Mobile No.")
    {
      setData((prevItems) => {
        return {...prevItems,
        mob: event.target.value
        }
      });
    }
    if(event.target.name === "E-mail ID")
    {
      setData((prevItems) => {
        return {...prevItems,
        email: event.target.value
        }
      });
    }
    if(event.target.name === "Address")
    {
      setData((prevItems) => {
        return {...prevItems,
        address: event.target.value
        }
      });
    }
    if(event.target.name === "country")
    {
      setData((prevItems) => {
        return {...prevItems,
        country: event.target.value
        }
      });
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.item(data);
  }
  
    return (
      <div className="form">
  <form>
    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={changeHandler}></input>

    <label htmlFor="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={changeHandler}></input>
    
     <label htmlFor="Branch Name">Bank Branch </label>
    <input type="text" id="Branch Name" name="Bank Branch" placeholder="Your Bank Branch Name" onChange={changeHandler}></input>

    
    <label htmlFor="Account No.">Account No.</label>
    <input type="text" id="Acc. No." name="Account No." placeholder="Your Bank Account No." onChange={changeHandler}></input>
     <label htmlFor="Mobile No.">Mobile No.</label>
    <input type="text" id="Mobile No." name="Mobile No." placeholder="Your Registered Mobile No." onChange={changeHandler}></input>
     <label htmlFor="E-mail ID">E-mail ID</label>
    <input type="email" id="E-mail ID" name="E-mail ID" placeholder="Your Registered E-mail ID" onChange={changeHandler}></input>


    <label htmlFor="Address">Address</label>
    <textarea type="text" id="Address" name="Address" placeholder="Your Permanent Address" onChange={changeHandler}></textarea>

    <label htmlFor="country">Country</label>
    <select id="country" name="country" onChange={changeHandler}>
      <option value="India">India</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
      <option value="usa">UK</option>
      <option value="usa">Russia</option>
    </select>
  
    <input type="submit" value="Submit" onClick={submitHandler}></input>
  </form>
</div>
    );
  }
  
export default FormExample;