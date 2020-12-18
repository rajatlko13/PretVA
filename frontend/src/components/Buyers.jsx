import React from 'react';
import ProfilePic from '../images/ProfilePic.png';

const Buyers = (props) => {
    console.log("Buyers props",props);
    const prod = props.products.map(item => {
        return <div style={{color:"rgb(18, 77, 81)", border: '2px solid #AFB2C1', borderRadius: '20px', width: '30%', padding: '2vw', margin: '1vw'}}>
                    <div className="row">
                        <img src={ProfilePic} width="70vw" className="col-lg-4" style={{borderRadius: '20px'}} />
                        <p className="col-lg-4"><strong>{item.buyer_name}</strong></p>
                    </div>
                    <div className="my-2">
                        <p><strong>Requirement : </strong>---</p>
                        <p><strong>Product : </strong>{item.product_name}</p>
                        <span className="d-flex justify-content-between">
                            <p><strong>Weight : </strong>{item.weight_gsm} gsm</p>
                            <p><strong>Quantity : </strong>{item.quantity} { item.quantity<=1 ? "mtr" : "mtrs" }</p>
                        </span>
                        <p><strong>Cost Bracket : </strong>INR {item.price_rs}/mtr</p>
                        <p><strong>Lead Time Provision : </strong>{item.lead_time} { item.lead_time<=1 ? "month" : "months" }</p>
                        <p><strong>Delivery Location : </strong>---</p>
                    </div>
                </div>
    });
    return prod;
        // <div className="container my-4">
        //     <div className="row d-flex justify-content-between mx-auto" style={{width: '90%'}}>
        //         <div style={{border: '2px solid #AFB2C1', borderRadius: '20px', width: '30%', padding: '2vw'}}>
        //             <p><strong>Requirement : </strong></p>
        //             <p><strong>Fabric : </strong></p>
        //             <span className="d-flex justify-content-between">
        //                 <p><strong>Weight : </strong></p>
        //                 <p><strong>Quantity : </strong></p>
        //             </span>
        //             <p><strong>Cost Bracket : </strong></p>
        //             <p><strong>Lead Time Provision : </strong></p>
        //             <p><strong>Delivery Location : </strong></p>
        //         </div>
        //         <div style={{border: '2px solid #AFB2C1', borderRadius: '20px', width: '30%', padding: '2vw'}}>
        //             <p><strong>Requirement : </strong></p>
        //             <p><strong>Fabric : </strong></p>
        //             <span className="d-flex justify-content-between">
        //                 <p><strong>Weight : </strong></p>
        //                 <p><strong>Quantity : </strong></p>
        //             </span>
        //             <p><strong>Cost Bracket : </strong></p>
        //             <p><strong>Lead Time Provision : </strong></p>
        //             <p><strong>Delivery Location : </strong></p>
        //         </div>
        //         <div style={{border: '2px solid #AFB2C1', borderRadius: '20px', width: '30%', padding: '2vw'}}>
        //             <p><strong>Requirement : </strong></p>
        //             <p><strong>Fabric : </strong></p>
        //             <span className="d-flex justify-content-between">
        //                 <p><strong>Weight : </strong></p>
        //                 <p><strong>Quantity : </strong></p>
        //             </span>
        //             <p><strong>Cost Bracket : </strong></p>
        //             <p><strong>Lead Time Provision : </strong></p>
        //             <p><strong>Delivery Location : </strong></p>
        //         </div>

        //     </div>

        // </div>
}
 
export default Buyers;