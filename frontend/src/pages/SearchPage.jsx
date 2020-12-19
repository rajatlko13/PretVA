import React, {Component} from 'react';
import SearchButtons from '../components/SearchButtons';

class SearchPage extends Component {
    
    render() { 
        return ( 
            <div>
                <div style={{ backgroundColor: '#AFB2C1' , height: '1vh'}}></div>
                <p className="mx-5 my-5" style={{color:"rgb(18, 77, 81)"}}>
                    <strong style={{fontWeight: 'bolder'}}>Search /</strong> Search Buyer Requirement
                </p>
                
                <SearchButtons />
            </div>
         );
    }
}
 
export default SearchPage;