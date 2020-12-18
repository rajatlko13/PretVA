import React, {Component} from 'react';
import axios from 'axios';
import Buyers from '../components/Buyers';
import SearchFilters from '../components/SearchFilters';
import TextBox from '../components/TextBox';
import SearchBadges from './SearchBadges';

class SearchButtons extends Component {
    
    state = { 
        products: [],
        filteredProducts: [],
        searchName: '',
        badges: ''
    }

    async componentDidMount() {
        try {
            const products = await axios.get(`http://localhost:9000/api/products/`);
            this.setState({products: products.data, filteredProducts: products.data});
        } catch (error) {
            console.log(error);
        }
    }

    searchByName = async (name) => {
        console.log("name=",name);
        try {
            if(name) {
                const products = await axios.get(`http://localhost:9000/api/products/getByName/${name}`);
                this.setState({filteredProducts: products.data, searchName: name});
            }
            else
                this.setState({filteredProducts: this.state.products, searchName: ""});
        } catch (error) {
            console.log(error);
        }
    }

    removeNameBadge = () => {
        this.setState({ searchName: '', filteredProducts: this.state.products });
    }

    // removeBadge = () => {
    //     this.setState({ searchName: '', filteredProducts: this.state.products });
    // }

    removeAllBadges = () => {
        this.setState({ searchName: '', badges: '', filteredProducts: this.state.products });
    }

    applyFilters = (filters) => {
        
        var filteredProducts = [...this.state.products];
        var badges = [...filters.products];

        if(this.state.searchName) {
            console.log("searchName=",this.state.searchName);
            filteredProducts = filteredProducts.filter(item => 
                item.buyer_name === this.state.searchName
            );
            console.log("filtered=",filteredProducts);
            this.setState({filteredProducts, badges});
        }

        if(filters.products) {
            let newArray = [];
            console.log("filters=",filters.products);
            console.log("products=", this.state.products);
            filteredProducts.forEach(product => {
                badges.forEach(badge => {
                    if(product.product_name === badge) {
                        newArray.push(product);
                        return;
                    }
                });
            });
            this.setState({filteredProducts: newArray, badges});
        }
    }

    render() { 
        return ( 
            <div className="container">
                <div className="d-flex justify-content-center my-5">
                    <button className="btn btn-white mx-1" style={{border: '2px solid rgb(18, 77, 81)', borderRadius: '30px 0 0 30px', height: '9vh', width: '22vw', color:"rgb(18, 77, 81)", fontSize: '1.4vw'}}>Search Supplier Product</button>
                    <button className="btn btn-white mx-1" style={{border: '2px solid rgb(18, 77, 81)', borderRadius: '0 30px 30px 0', height: '9vh', width: '22vw', color:"rgb(18, 77, 81)", fontSize: '1.4vw'}}>Search Buyer Requirement</button>
                </div>

                <SearchFilters applyFilters={this.applyFilters} />

                <TextBox searchByName={this.searchByName} />

                { (this.state.searchName.length<=0 || !this.state.badges) ? null : 
                    <SearchBadges nameBadge={this.state.searchName} badges={this.state.badges} removeNameBadge={this.removeNameBadge} removeAllBadges={this.removeAllBadges} /> }

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