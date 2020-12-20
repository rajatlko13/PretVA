import React, {Component} from 'react';
import axios from 'axios';
import Buyers from '../components/Buyers';
import SearchFilters from '../components/SearchFilters';
import TextBox from '../components/TextBox';
import SearchBadges from './SearchBadges';
import '../css/myStyle.css';

class SearchButtons extends Component {
    
    state = { 
        products: [],
        filteredProducts: [],
        searchName: '',
        badges: {
            products: [],
            quantity: '',
            cost: '',
            leadTime: ''
        }
    }

    async componentDidMount() {
        try {
            const products = await axios.get(`https://pretva-backend.herokuapp.com/api/products`);
            this.setState({products: products.data, filteredProducts: products.data});
        } catch (error) {
            console.log(error);
        }
    }

    searchByName = async (name) => {
        console.log("name=",name);
        await this.setState({searchName: name});
        this.applyFilters(this.state.badges);
    }

    removeNameBadge = async () => {
        await this.setState({ searchName: '' });
        this.applyFilters(this.state.badges);
    }

    removeBadge = async ({type, value}) => {
        if(type === 'products') {
            let index = this.state.badges.products.indexOf(value);
            let badges = {...this.state.badges};
            badges.products.splice(index, 1);
            await this.setState({ badges });
        }

        else if(type === 'quantity') {
            let badges = {...this.state.badges};
            badges[type] = '';
            await this.setState({ badges });
        }

        this.applyFilters(this.state.badges);

    }

    removeAllBadges = () => {
        const badges = {
            products: [],
            quantity: '',
            cost: '',
            leadTime: ''
        };
        this.setState({ searchName: '', badges , filteredProducts: this.state.products });
    }

    applyFilters = (filters) => {
        
        var filteredProducts = [...this.state.products];
        var badges = {...filters};
        this.setState({filteredProducts, badges});
        console.log("badges=",badges);
        console.log("element=",typeof filteredProducts[0].buyer_name);

        if(this.state.searchName) {
            console.log("searchName=",this.state.searchName);
            filteredProducts = filteredProducts.filter(item => {
                if(item.buyer_name) {                      // to remove any null buyer
                    if(item.buyer_name.toLowerCase() === this.state.searchName.toLowerCase())
                        return item;
                }
            });
            console.log("filtered=",filteredProducts);
            this.setState({filteredProducts});
        }

        
        console.log("filters=",filters);
        if(filters.products.length>0) {
            let newArray = [];
            console.log("products=", this.state.products);
            filteredProducts.forEach(product => {
                badges.products.forEach(badge => {
                    if(product.product_name === badge) {
                        newArray.push(product);
                        return;
                    }
                });
            });
            filteredProducts = [...newArray];
            this.setState({filteredProducts: newArray});
        }

        if(filters.quantity) {
            console.log("quantity=",filters.quantity);
            let newArray = [];
            newArray = filteredProducts.filter(product => 
                product.quantity >= filters.quantity
            );
            filteredProducts = [...newArray];
            this.setState({filteredProducts: newArray});
        }

    }

    render() { 
        return ( 
            <div className="container">
                <div className="d-flex justify-content-center my-5 searchButtons">
                    <button className="btn btn-white mx-1 p-3" style={{border: '2px solid rgb(18, 77, 81)', borderRadius: '30px 0 0 30px', color:"rgb(18, 77, 81)"}}>Search Supplier Product</button>
                    <button className="btn btn-white mx-1 p-3 active" style={{border: '2px solid rgb(18, 77, 81)', borderRadius: '0 30px 30px 0', color:"rgb(18, 77, 81)"}}>Search Buyer Requirement</button>
                </div>
                {/* height: '9vh', width: '16vw', */}

                <SearchFilters applyFilters={this.applyFilters} />

                <TextBox searchByName={this.searchByName} />

                { (this.state.searchName.length===0 && this.state.badges.products.length===0 && this.state.badges.quantity.length===0) ? null : 
                    <SearchBadges nameBadge={this.state.searchName} badges={this.state.badges} removeNameBadge={this.removeNameBadge} removeBadge={this.removeBadge} removeAllBadges={this.removeAllBadges} /> }

                <div className="mx-auto my-4">
                    <div className="row d-flex mx-auto">
                        {console.log("filtered buyers=", this.state.filteredProducts)}
                        <Buyers products={this.state.filteredProducts} />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SearchButtons;