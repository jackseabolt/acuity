import React from 'react'; 
import './ProductPanelInterface.css'; 

export default class ProductPanelInterface extends React.Component {
    
    // these functions toggle sections into view
    handleA() {
        console.log('it fired A')
        this.props.onSet('A')
    }
    handleC() {
        console.log('it fired C')
        this.props.onSet('C')
    }
    handleD() {
        console.log('it fired D')
        this.props.onSet('D')
    }
    handleE() {
        console.log('it fired E')
        this.props.onSet('E')
    }

    render() {
        return (
            <div className="ProductPanelInterface"> 
                <div className="interface-button" onClick={() => this.handleA()}>
                        &nbsp;
                </div>
                <div className="interface-button-alt" onClick={() => this.handleC()}>
                        &nbsp;
                </div>
                <div className="interface-button" onClick={() => this.handleD()}>
                        &nbsp;
                </div>
                <div className="interface-button-alt" onClick={() => this.handleE()}>
                        &nbsp;
                </div>
                <button>Buy Now</button>
            </div>
        )
    }
}