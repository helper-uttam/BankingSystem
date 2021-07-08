import React, { useState }  from "react";
import Navbar from "./component/Navbar";
import Card from "./UI/Card";
import Footer from "./component/Footer";
import {LoanSec, InsuranceSec, TradeSec} from "./component/Content";
import Login from "./component/Login";

let formData = {};

async function addBankUserData()
{
  const response = await fetch('https://banking-system-f90d0-default-rtdb.firebaseio.com/formData.json', {
  method: "POST",
  body: JSON.stringify(formData),
  headers: {
    "Content-Type": "application/json"
  }
});
const data = await response.json();
console.log(data);
}

function App()
{
  const [login, renderLogin] = useState(true);

  const getData = (data) =>{
    formData = data;
    // console.log(formData);
    addBankUserData();
  }
  

 

  if (login) {
    return <Login set={renderLogin}/>
  }
  else
  {
    return(
      <div>
        <Navbar />
        <Card key={LoanSec[0].id} Loanitems={LoanSec} Insuranceitems={InsuranceSec} Tradeitems={TradeSec} enteredItems={getData}/>
        <Footer />
      </div>
    )
  }
}

export default App;
