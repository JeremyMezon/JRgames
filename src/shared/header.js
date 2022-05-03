import React from "react";
import "../styles/_header.scss";

export const Header = () => {
	return (
		<header className="header-section">
			<div className="container">
				<div className="row">
					<div className="col col-lg-4">
						<div className="header-logo">
							<h1 className="title">
								<span className="yellow">JR</span>Games
							</h1>
						</div>
					</div>
					<div className="col col-lg-4 d-flex justify-content-center">
						<nav className="header-menu">
							<ul>
								<li>
									<a href="/">Home</a>
								</li>
								<li>
									<a href="/">Games</a>
								</li>
								<li>
									<a href="/">About</a>
								</li>
								<li>
									<a href="/">Contact</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col col-lg-4 d-flex justify-content-end">
						<div className="">
							<div className="card-user">
								<div className="avatar"></div>
								<h5 className="avatar-name">John Doe</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
