import React, {useState}  from "react";
import Loan from "../component/Loan";
import Insurance from "../component/Insurance";
import Trade from "../component/Trade";
import "./Card.css"
function Card(props)
{
    const [loan, setLoan] = useState(0);
    const handleClick_loan = ()=>{
        setLoan((1));
        setInsurance(0);
        setTrade(0);
    }

    const [insurance, setInsurance] = useState(0);
    const handleClick_insurance = ()=>{
        setInsurance(1);
        setLoan(0);
        setTrade(0);
    }

    const [trade, setTrade] = useState(0);
    const handleClick_trade = () => {
        setTrade(1);
        setInsurance(0);
        setLoan(0);
    }
    const getData = (data) =>{
        let formData = data;
        // console.log(formData);
        props.enteredItems(formData);
    }
    return(
        <div className="card__body">
            <div className="card__child__left">
                <div onClick={handleClick_loan} className="card__child__left__item">
                    <p>Loan</p>
                </div>
                <div onClick={handleClick_insurance} className="card__child__left__item">
                    <p>Insurance</p>
                </div>
                <div onClick={handleClick_trade} className="card__child__left__item">
                    <p>Trading</p>
                </div>
            </div>
            {loan || insurance || trade === 1? (loan?<Loan items={props} enteredData={getData}/>:<p></p>) :<div><h1 className="welcome_h">Welcome</h1><br></br> <p className="welcome_p">Please select one option to get started!</p></div>}
            {loan || insurance ||trade === 1 ? (insurance?<Insurance items={props} enteredData={getData}/>: <p></p>) : <p></p>}
            {loan || insurance || trade === 1? (trade? <Trade items={props} enteredData={getData} />:<p></p>):<p></p> }
        </div>
        );
}
export default Card;