import React, { Component, Fragment } from 'react'
import CardProduct from '../../container/CardProduct/CardProduct';
import './Product.css';

class Product extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
            <p className="head-title">Halaman Product</p>
            <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="image/vintage.png" alt=""/>
                    </div>
                    <div className="troley">
                        <img src="image/shopping-cart.png" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div> 
                </div>
               <CardProduct onCounterChange = {(value) => this.handleCounterChange(value)}/>
            </Fragment>
        );
    }
}

export default Product;
