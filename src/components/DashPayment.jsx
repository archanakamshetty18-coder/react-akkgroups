import { Link } from "react-router-dom";

export function DashPayment(){
    return(
        <>
            <div className="container text-center">
                <table className="table table-bordered pay" border={1} style={{width:'50%',height:'300px'}} >
                    <tr>
                        <th>Payment Method</th>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="/">
                                <input type="radio" /> <Link to={'/dashcheckout'}> Debit/Credit Card </Link>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="/">
                                <input type="radio" /> <Link to={'/dashcheckout'}> Mobile/NetBanking </Link>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="/">
                                <input type="radio" /> <Link to={'/dashcheckout'}> UPI (<i class="fa-brands fa-google-pay"></i> / <i class="fa-brands fa-amazon-pay"></i> / <i class="fa-brands fa-paypal"></i>) </Link>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="/">
                                <input type="radio" /> <Link to={'/dashcheckout'}>
                                    Cash on Delivery
                                </Link>
                            </label>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

