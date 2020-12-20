import React, { Component } from 'react';

class Home extends Component {

    render() { 

        return ( 
            <div className="container text-center text-white" style={{textAlign: 'center', fontFamily: 'Goldman', marginTop: '10%'}}>
                <p style={{ margin: '0', padding: '0', fontSize: '6vw', lineHeight: '1em', textShadow: '2px 2px 7px blue'}}>It's all about</p>
                <p style={{ margin: '0', padding:'0', fontSize: '6vw', lineHeight: '1em', textShadow: '2px 2px 7px blue'}}>Saving Lives</p>
                <p className="mt-2">Welcome to Home Page</p>
            </div>

         );
    }
}
 
export default Home;