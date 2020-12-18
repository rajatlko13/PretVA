import React from 'react';

const SearchBadges = (props) => {
    return ( 
        <div>
            <div style={{ backgroundColor: '#AFB2C1' , height: '1px'}}></div>
                <div className="my-2 d-flex justify-content-start align-content-center">
                    <p className="my-auto" style={{color:"rgb(18, 77, 81)"}}>Search Filters : </p>
                    <span className="badge my-auto mx-3 rounded-pill p-2" style={{backgroundColor: '#AFB2C1', color: "rgb(18, 77, 81)"}}>
                        {props.badge}
                        <button onClick={props.removeNameBadge} style={{backgroundColor: '#AFB2C1', color: "rgb(18, 77, 81)", border: '0', outline: '0'}}>X</button>
                    </span>
                    <span className="badge my-auto mx-3 rounded-pill p-2" style={{backgroundColor: 'rgb(18, 77, 81)', color: "white"}}>
                        Clear All
                        <button onClick={props.removeAllBadges} style={{backgroundColor: 'rgb(18, 77, 81)', color: "white", border: '0', outline: '0'}}>X</button>
                    </span>
                </div>
            <div style={{ backgroundColor: '#AFB2C1' , height: '1px'}}></div>
        </div>
     );
}
 
export default SearchBadges;