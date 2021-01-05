import React, { Component} from 'react';
import Counter from './Counter';

class CardProduct extends Component {
    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="image/Fried-Chiken.jpg" alt=""/>
                    </div>
                    <p className="product-title">Daging ayam berbumbu</p>
                    <p className="product-price">Rp.50000</p>
                    <Counter onCounterChange = {(value) => this.props.onCounterChange(value)}/>
                </div>
        );
    }
}

export default CardProduct;
