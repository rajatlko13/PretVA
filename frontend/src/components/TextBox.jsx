import React, { useState } from 'react';
import '../css/myStyle.css';

const TextBox = (props) => {

    const [name, setName] = useState("");

    return ( 
        <div className="row my-4">
            <div className="row mx-auto">
                <form className="col-lg-8 form-inline my-2 mx-auto" id="textBoxForm" onSubmit={(e) => {e.preventDefault(); props.searchByName(name)}}>
                    <button style={{backgroundColor: "rgb(18, 77, 81)", width: '8%',  height: '6vh', border: '0px', borderRadius: '10px 0 0 10px'}} disabled></button>
                    <input placeholder="Search with keywords" name="name" value={name} onChange={(e) => setName(e.target.value)} className="pl-3" style={{ outline: 'none', width: '80%', height: '6vh', borderRight: '0', borderLeft: '1px solid rgb(18, 77, 81)', borderTop: '1px solid rgb(18, 77, 81)', borderBottom: '1px solid rgb(18, 77, 81)'}} />
                    <button type="submit" style={{backgroundColor: "white", width: '10%', height: '6vh', outline: '0', border: '0px', borderRadius: '0 10px 10px 0', borderTop: '1px solid rgb(18, 77, 81)', borderBottom: '1px solid rgb(18, 77, 81)', borderRight: '1px solid rgb(18, 77, 81)'}}><i className="fas fa-search"></i></button>
                </form>
                {/* 3,43 */}
                <button className="col-lg-3 rounded-pill mx-auto my-1" id="textBoxButton" style={{backgroundColor: "white", border: '2px solid rgb(18, 77, 81)', color: 'rgb(18, 77, 81)'}}><strong>Post Product Requirement</strong></button>
        
            </div>
        </div>
     );
}
 
export default TextBox;