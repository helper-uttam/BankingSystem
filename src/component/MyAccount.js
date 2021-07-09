import React from "react";
import "./MyAccount.css";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const MyAccount = () => {
    return <div className="container">
                <div className="balance">
                    <h2>Account No. 20013789552</h2>
                    <h2>Uttam Kumar</h2>
                    <h3> Avl Balance</h3>
                    <p>INR 10523</p>
                </div>
                <div className="transaction">
                    <h2>Transaction</h2>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Avl Balance (INR)</th>
                        </tr>
                        <tr>
                            <td>04-07-2021</td>
                            <td><ArrowDownwardIcon style={{ color: "red" }}/> 200</td>
                            <td>$7800.00</td>
                        </tr>
                        <tr>
                            <td>06-07-2021</td>
                            <td><ArrowUpwardIcon style={{ color: "green" }}/> 400</td>
                            <td>$8200.00</td>
                        </tr>
                        <tr>
                            <td>09-07-2021</td>
                            <td><ArrowDownwardIcon style={{ color: "green" }}/> 200</td>
                            <td>$8000.00</td>
                        </tr>
                    </table>
                </div>
        </div>
}

export default MyAccount;