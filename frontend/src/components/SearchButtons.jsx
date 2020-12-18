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
        searchName: ''
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

    removeAllBadges = () => {
        this.setState({ searchName: '', filteredProducts: this.state.products });
    }

    render() { 
        return ( 
            <div className="container">
                <div className="d-flex justify-content-center my-5">
                    <button className="btn btn-white mx-1" style={{border: '2px solid rgb(18, 77, 81)', borderRadius: '30px 0 0 30px', height: '9vh', width: '22vw', color:"rgb(18, 77, 81)", fontSize: '1.4vw'}}>Search Supplier Product</button>
                    <button className="btn btn-white mx-1" style={{border: '2px solid rgb(18, 77, 81)', borderRadius: '0 30px 30px 0', height: '9vh', width: '22vw', color:"rgb(18, 77, 81)", fontSize: '1.4vw'}}>Search Buyer Requirement</button>
                </div>

                <SearchFilters />

                <TextBox searchByName={this.searchByName} />

                { this.state.searchName.length<=0 ? null : 
                    <SearchBadges badge={this.state.searchName} removeNameBadge={this.removeNameBadge} removeAllBadges={this.removeAllBadges} /> }

                <div className="mx-auto my-4">
                    <div className="row d-flex mx-auto">
                        <Buyers products={this.state.filteredProducts} />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SearchButtons;