import React from 'react'; 
import './ProductPanel.css';
import ProductPanelInterface from '../ProductPanelInterface/ProductPanelInterface';  
import A from '../A/A'; 
import C from '../C/C';
import D from '../D/D'; 
import E from '../E/E';  

export default class ProductPanel extends React.Component {
    constructor() {
        super(); 
        this.state = {
            current: 'A'
        }
    }

    setCurrent(newState) {
        this.setState({
            current: newState
        });
    }
    
    render() {
        let content; 
        switch(this.state.current) {
            case('A'):
                content = <A />   
                break;
            case('C'):
                content = <C /> 
                break; 
            case('D'): 
                content = <D />
                break; 
            case('E'): 
                content = <E />
                break; 
        }

        return (
            <div className="ProductPanel"> 
                <div className="slider">
                    <div className="arrow-container">
                        <i class="fas fa-angle-left"></i>
                    </div>
                    <div className="arrow-container">
                        <i class="fas fa-angle-right"></i>
                    </div>
                </div>
                { content }
                <ProductPanelInterface onSet={value => this.setCurrent(value)} />
            </div>
        )
    }
}