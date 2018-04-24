import React from 'react'; 
import './Item.css'; 

export default class Item extends React.Component {
    
    render() {
        return (
            <div className="Item"> 
                <div className="image">
                </div>
                <h3>{this.props.item.product}</h3>
                <div class="container">
                    <p><strong>Price: </strong>${this.props.item.price}</p>
                    <p><strong>Quantity: </strong>{this.props.item.quantity}</p>
                </div>
            </div>
        )
    }
}