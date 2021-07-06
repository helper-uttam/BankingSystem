import React, {useState} from "react";
import FormExample from "./Form";
function Trade(props)
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

    if (flag) {
        return(<FormExample />);
    }
    else
    return(
        <div className="card__child__right">
                <h2 className="date">{date+" "+month+","+year}</h2>
            <div className="card__child__right__item">
                <h1 className="Loan_Title">{props.items.Tradeitems[0].title}</h1>
                <p>{props.items.Tradeitems[0].content}</p>
            </div>
            <div className="card__child__right__item">
                <h1 className="Loan_Title">{props.items.Tradeitems[1].title}</h1>
                <p>{props.items.Tradeitems[1].content}</p>
            </div>
            <div className="card__child__right__item">
                <h1>Coming Soon ... </h1>
            </div>
            <button onClick={handleClick} className="apply_button">Open account!</button>
        </div>
        );
} 
export default Trade;