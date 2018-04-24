import React from 'react';
import Item from '../Item/Item';  
import './B.css'; 

export default class B extends React.Component {
    constructor() {
        super(); 
        this.state={
            items: [{
                product: 'Shoes',
                price: 35.75, 
                quantity: 1
            }, 
            {
                product: 'Pens',
                price: 5.49, 
                quantity: 3
            }, 
            {
                product: 'Paper',
                price: 12.49, 
                quantity: 1
            }]
        }
    }

    render() {

        let items = this.state.items.map((item, key) => (
            <Item key={key} item={item} />
        )); 

        let total = 0; 
        this.state.items.forEach(item => total = total + item.price )
        total = Math.round(total * 100) / 100

        return (
            <div className="B"> 
                <div className="container">
                    { items }
                </div>
                <div className="bottom">
                    <button>Buy Now ${total }</button>
                </div>
            </div>
        )
    }
}