import React from 'react';

const SearchBadges = (props) => {
    return ( 
        <div>
            <div style={{ backgroundColor: '#AFB2C1' , height: '1px'}}></div>
                <div className="my-2 d-flex justify-content-start flex-wrap align-content-center">
                    <p className="my-auto mr-3 py-2" style={{color:"rgb(18, 77, 81)"}}>Search Filters : </p>
                    
                    { props.nameBadge.length===0 ? null : 
                        <span className="badge my-auto mx-1 rounded-pill p-2" style={{backgroundColor: '#AFB2C1', color: "rgb(18, 77, 81)"}}>
                            {props.nameBadge}
                            <button onClick={props.removeNameBadge} style={{backgroundColor: '#AFB2C1', color: "rgb(18, 77, 81)", border: '0', outline: '0'}}>X</button>
                        </span>
                    }
                    {console.log("SearchBadges=",props.badges)}

                    { props.badges.products.length===0 ? null : 
                        props.badges.products.map(product => {
                            return <span key={product} className="badge my-auto mx-1 rounded-pill p-2" style={{backgroundColor: '#AFB2C1', color: "rgb(18, 77, 81)"}}>
                                        {product}
                                        <button onClick={() => props.removeBadge({type: "products", value: product})} style={{backgroundColor: '#AFB2C1', color: "rgb(18, 77, 81)", border: '0', outline: '0'}}>X</button>
                                    </span>
                        })
                    }   

                    { props.badges.quantity.length===0 ? null : 
                        <span className="badge my-auto mx-1 rounded-pill p-2" style={{backgroundColor: '#AFB2C1', color: "rgb(18, 77, 81)"}}>
                            {props.badges.quantity} mtrs
                            <button onClick={() => props.removeBadge({type: "quantity", value: props.badges.quantity})} style={{backgroundColor: '#AFB2C1', color: "rgb(18, 77, 81)", border: '0', outline: '0'}}>X</button>
                        </span>
                    } 

                    { props.nameBadge.length<0 && !props.badges ? null : 
                    <span className="badge my-auto mx-1 rounded-pill p-2" style={{backgroundColor: 'rgb(18, 77, 81)', color: "white"}}>
                        Clear All
                        <button onClick={props.removeAllBadges} style={{backgroundColor: 'rgb(18, 77, 81)', color: "white", border: '0', outline: '0'}}>X</button>
                    </span>
                    }
                </div>
            <div style={{ backgroundColor: '#AFB2C1' , height: '1px'}}></div>
        </div>
     );
}
 
export default SearchBadges;