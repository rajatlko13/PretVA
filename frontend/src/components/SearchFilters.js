import React, {Component} from 'react';

class SearchFilters extends Component {
    state = { 
        products: [
            { id: 0, value: "Jacket", isChecked: false },
            { id: 1, value: "Trousers", isChecked: false },
            { id: 2, value: "T-Shirts", isChecked: false },
            { id: 3, value: "Blazer", isChecked: false },
            { id: 4, value: "Sweater", isChecked: false },
            { id: 5, value: "Short", isChecked: false },
            { id: 6, value: "Skirt", isChecked: false },
            { id: 7, value: "Raincoat", isChecked: false },
            { id: 8, value: "Jeans", isChecked: false },
            { id: 9, value: "Dress", isChecked: false },
        ],
        badges: {
            products: [],
            quantity: '',
            cost: '',
            leadTime: ''
        }
    }

    onProductChange = (e, id) => {
        let products = [...this.state.products];
        products[id] = {
            id,
            value: e.target.value,
            isChecked: e.target.checked
        };
        let badges = {...this.state.badges};
        if(e.target.checked)
            badges.products.push(e.target.value);
        else {
            let ind = badges.products.indexOf(e.target.value);
            if(ind>-1)
                badges.products.splice(ind, 1);
        }
        this.setState({products, badges});
    }

    render() { 
        return ( 
            <div className="container" style={{border: '2px solid #AFB2C1', borderRadius: '8px', width: '90%'}}>
                <div className="mx-3 my-3">
                    <p style={{color:"rgb(18, 77, 81)", fontSize: '1.5em', fontWeight: 'bolder'}}>
                        <strong>Search Filters</strong>
                    </p>
                    <div className="d-flex justify-content-between" style={{fontSize: '1.3em'}}>
                        <div className="dropdown mx-2">
                            <a className="dropdown-toggle" style={{color:"rgb(18, 77, 81)", textDecoration: 'none'}} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Product
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{maxHeight: '40vh', overflowY: 'auto'}}>
                                { this.state.products.map(product => {
                                    return (<span key={product.id} className="dropdown-item px-2">
                                                <input type="checkbox" onChange={(e) => this.onProductChange(e,product.id)} value={product.value} checked={product.isChecked} /> 
                                                <label className="mx-1">{product.value}</label> 
                                            </span>)
                                })}
                            </div>
                        </div>
                        <div className="dropdown mx-2">
                            <a className="dropdown-toggle" style={{color:"rgb(18, 77, 81)"}} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Quantity
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div className="dropdown mx-2">
                            <a className="dropdown-toggle" style={{color:"rgb(18, 77, 81)"}} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cost
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div className="dropdown mx-2">
                            <a className="dropdown-toggle" style={{color:"rgb(18, 77, 81)"}} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Lead Time
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div className="dropdown mx-2">
                            <a className="dropdown-toggle" style={{color:"rgb(18, 77, 81)"}} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Rating
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div className="dropdown mx-2">
                            <a className="dropdown-toggle" style={{color:"rgb(18, 77, 81)"}} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Location
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div className="mx-2">
                            <button onClick={() => this.props.applyFilters(this.state.badges)} className="rounded-pill px-3 py-1" style={{border: "2px solid rgb(18, 77, 81)", backgroundColor: 'white' }}>Apply Filters</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SearchFilters;