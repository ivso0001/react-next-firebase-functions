import Header from "./Header";
import React, { Component } from 'react'

class Layout extends Component {
    static async getInitialProps ({req}) {
        console.log('req: ',req);
        return req 
            ? { from: 'server' }
            : { from: 'client '}
    }

    render() {
        return(
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default Layout