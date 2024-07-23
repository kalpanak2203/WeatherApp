import React, { Component } from "react";
import "./card.css"
import Weather from "../weather";

class Card extends Component {
	render() {
		return (
			<div className="card-container">
				<h1 className="card-title">Current weather</h1>
				<br></br>
                <Weather />
				{/* <a href="cardPage" className="card-btn">Learn more</a> */}
			</div>
		);
	}
}

export default Card;
