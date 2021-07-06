import React, {useState} from "react";
import FormExample from "./Form";
import "../UI/Card.css";
function Loan(props)
{
    const [flag, setFlag] = useState(0);
    const handleClick = () => {
        setFlag(1);
    }
    let date = new Date().getDate();
    let month = new Date().getUTCMonth()+1;
    let year = new Date().getFullYear();
    
    if(month===1){month="January"}
    if(month===2){month="February"}
    if(month===3){month="March"}
    if(month===4){month="April"}
    if(month===5){month="May"}
    if(month===6){month="June"}
    if(month===7){month="July"}
    if(month===8){month="August"}
    if(month===9){month="September"}
    if(month===10){month="Octpber"}
    if(month===11){month="November"}
    if(month===12){month="December"}

    const getData = (data) =>{
        let formData = data;
        // console.log(formData);
        props.enteredData(formData);
    }
    if (flag) {
        return(<FormExample item={getData}/>);
    }
    else
    return(
        <div className="card__child__right">
    <h2 className="date">{date+" "+month+","+year}</h2>
    <div className="card__child__right__item">
        <h1 className="Loan_Title">{props.items.Loanitems[0].title}</h1>
        <p>{props.items.Loanitems[0].content}</p>
        <br></br>
        <h4>{props.items.Loanitems[0].FAQ}</h4>
        <p>{props.items.Loanitems[0].Ans}</p>
    </div>
    <div className="card__child__right__item">
        <h1 className="Loan_Title">{props.items.Loanitems[1].title}</h1>
        <p>{props.items.Loanitems[1].content}</p>
        <br></br>
        <h4>{props.items.Loanitems[1].FAQ}</h4>
        <p>{props.items.Loanitems[1].Ans}</p>
    </div>
    <div className="card__child__right__item">
        <h1 className="Loan_Title">{props.items.Loanitems[2].title}</h1>
        <p>{props.items.Loanitems[2].content}</p>
        <br></br>
        <h4>{props.items.Loanitems[2].FAQ}</h4>
        <p>{props.items.Loanitems[2].Ans}</p>    </div>
    <div className="card__child__right__item">
    <h1 className="Loan_Title">{props.items.Loanitems[3].title}</h1>
        <p>{props.items.Loanitems[3].content}</p>
        <br></br>
        <h4>{props.items.Loanitems[3].FAQ}</h4>
        <p>{props.items.Loanitems[3].Ans}</p>    </div>
    <div className="card__child__right__item">
    <h1 className="Loan_Title">{props.items.Loanitems[4].title}</h1>
        <p>{props.items.Loanitems[4].content}</p>
        <br></br>
        <h4>{props.items.Loanitems[4].FAQ}</h4>
        <p>{props.items.Loanitems[4].Ans}</p>    </div>
    <button onClick={handleClick} className="apply_button">Apply here!</button>
</div>
    );
}

export default Loan;