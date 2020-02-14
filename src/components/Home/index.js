import React from "react";
import "./style.css";


const Home = () => {
    return (
        <div class="parallax-slider">
			<div class="slider-wrapper">
				<div class="slide slide1 slide-active">
					<div class="content">
						<div class="container">
							<div class="col-md-6 caption">
								<h1>Lorem ipsum dolor sit</h1>
								<p>Curabitur blandit felis massa, et dapibus mi pretium nec.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="slide slide2">
					<div class="content">
						<div class="container">

							<div class="col-md-6 caption">
								<h1>Lorem ipsum dolor sit</h1>
								<p>Curabitur blandit felis massa, et dapibus mi pretium nec.</p>

							</div>
						</div>
					</div>
				</div>
				<div class="slide slide3">
					<div class="content">
						<div class="container">
							<div class="col-md-6 caption">
								<h1>Lorem ipsum dolor sit</h1>
								<p>Curabitur blandit felis massa, et dapibus mi pretium nec.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="slide-indicator">
				<ol>
					<li class="active"></li>
					<li></li>
					<li></li>
				</ol>
			</div>
		</div>
    );
};


export default Home; 