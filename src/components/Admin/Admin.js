import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Header/Header';

class Admin extends Component {
    render() {
        return (
            <div className="admin-home-container">
                <Header />
                {this.props.user.isAdmin &&
                    <div>
                    <Link to="/search"><button>Search</button></Link>
                    <Link to="/orders"><button>Orders</button></Link>
                    Stripe Dashboard
                </div>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;

    return {
        user
    };
}

export default connect(mapStateToProps)(Admin);