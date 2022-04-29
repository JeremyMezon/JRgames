import React from "react";
import { Card } from "../components/card";
import "../styles/home.scss";

const cardData = require("../db.json");

export const HomePage = () => {
	return (
		<section className="home-page">
			<section className="home-section">
				<div className="overlay"></div>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-9 col-lg-7">
							<div className="home-section-box">
								<h2>
									Search for your <span>favorites games</span>
								</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Doloribus aliquid eum id aut eligendi ea minus nostrum? Earum
									illum minima, beatae veniam error ipsam natus ipsum sed autem
									libero doloribus.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="popular-games-section">
				<div className="container">
					<div>
						<h4>Most Popular Games</h4>
					</div>
					<div className="popular-carousel">
						{cardData.slice(-4).map((game) => {
							return <Card data={game} />;
						})}
					</div>
				</div>
			</section>
			<section className="about-section">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-lg-6">
							<div className="background-about"></div>
						</div>
						<div className="col-12 col-lg-6">
							<div className="about-container">
								<div className="about-box">
									<div className="about-title">
										<h2>JRGAMES</h2>
										<h3>This is other title from this page</h3>
									</div>
									<div className="about-content">
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Doloribus aliquid eum id aut eligendi ea minus nostrum?
											Earum illum minima, beatae veniam error ipsam natus ipsum
											sed autem libero doloribus.
										</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Doloribus aliquid eum id aut eligendi ea minus nostrum?
											Earum illum minima.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};
