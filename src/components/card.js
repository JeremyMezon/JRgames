import React from "react";
import "../styles/components/card-games.scss";

export const Card = (props) => {
	const { title, rate, img } = props.data;

	return (
		<div className="card-game">
			<div className="card-game-img">
				<img src={img} alt={title} />
			</div>
			<div className="card-game-content">
				<div className="card-game-content-header">
					<h3>{title}</h3>
					<p>{rate}</p>
				</div>
			</div>
		</div>
	);
};
