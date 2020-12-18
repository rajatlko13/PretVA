import React, { useState } from 'react';

const TextBox = (props) => {

    const [name, setName] = useState("");

    return ( 
        <div className=" d-flex justify-content-center my-4 mx-auto">
            <form className="form-inline my-2 mx-2" onSubmit={(e) => {e.preventDefault(); props.searchByName(name)}}>
                <button style={{backgroundColor: "rgb(18, 77, 81)", width: '4vw',  height: '6vh', border: '0px', borderRadius: '10px 0 0 10px'}} disabled></button>
                <input placeholder="Search with keywords" name="name" value={name} onChange={(e) => setName(e.target.value)} className="pl-3" style={{ outline: 'none', width: '48vw', height: '6vh', borderRight: '0', borderLeft: '1px solid rgb(18, 77, 81)', borderTop: '1px solid rgb(18, 77, 81)', borderBottom: '1px solid rgb(18, 77, 81)'}} />
                <button type="submit" style={{backgroundColor: "white",  height: '6vh', outline: '0', border: '0px', borderRadius: '0 10px 10px 0', borderTop: '1px solid rgb(18, 77, 81)', borderBottom: '1px solid rgb(18, 77, 81)', borderRight: '1px solid rgb(18, 77, 81)'}}>🔍</button>
            </form>
            <button className="rounded-pill mx-2 my-1" style={{backgroundColor: "white", border: '2px solid rgb(18, 77, 81)', color: 'rgb(18, 77, 81)'}}><strong>Post Product Requirement</strong></button>
        </div>
     );
}
 
export default TextBox;