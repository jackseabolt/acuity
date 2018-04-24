import React from 'react'; 
import StarRatings from 'react-star-ratings';
import './A.css'; 

export default class A extends React.Component {
    constructor() {
        super(); 
        this.state ={
            rating: 4
        }
    }


    changeRating( newRating ) {
        console.log("This isn't connected")
    }

    render() {
        return (
            <div className="A"> 
                 <div className="slider-mini">
                    <div className="arrow-container">
                        <i class="fas fa-angle-left"></i>
                    </div>
                    <div className="arrow-container">
                        <i class="fas fa-angle-right"></i>
                    </div>
                </div>
                <div className="description A-description">
                    <h2>Tennis Racket</h2>
                    <p>Dropdown</p>
                    <p>Dropdown</p>
                    <h2>$42.99</h2>
                    <span className="stars">
                    <StarRatings
                        rating={this.state.rating}
                        starRatedColor="gold"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        starDimension={23}
                        starSpacing={3}
                    /></span>
                    <button>Share</button>
                </div>
            </div>
        )
    }
}