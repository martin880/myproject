import React, { Component} from 'react'

class CardProduct extends Component {
    state = {
        order: 4
    }
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order : this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
       if(this.state.order > 0){
        this.setState({
            order : this.state.order - 1
        }, () => {
            this.handleCounterChange(this.state.order);
       })
    }
}
    render() {
        return (
            
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="image/Fried-Chiken.jpg" alt=""/>
                    </div>
                    <p className="product-title">Daging ayam berbumbu</p>
                    <p className="product-price">Rp.50000</p>
                    <div className="counter">
                        <button className="button" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="button" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        );
    }
}

export default CardProduct;
