import React from 'react';

const Footer = () => {
    return ( 
        <div style={{position: 'absolute', left: '0', right: '0'}}>
            <div className="d-flex justify-content-center flex-wrap text-white py-4" style={{backgroundColor: "rgb(18, 77, 81)"}}>
                <div className="mx-3">Get in touch</div>
                <div className="mx-3 d-flex flex-column">
                    <p>Location</p>
                    <p>Bengaluru, Karnataka, India</p>
                </div>
                <div className="mx-3 d-flex flex-column">
                    <p>Contact</p>
                    <p>support@pretva.com</p>
                </div>
                <div className="mx-3 d-flex flex-column">
                    <p>Follow</p>
                    <p>support@pretva.com</p>
                </div>
            </div>
            <div className="p-1 " style={{backgroundColor: '#AFB2C1'}}>
                <p className="ml-5 pl-5 my-auto">2020 by PretVA</p>
            </div>
        </div>
     );
}
 
export default Footer;