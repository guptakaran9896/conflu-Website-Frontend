import React from 'react';

import '../../styles/AboutUs.css';
import img from "../../styles/a4.png"
const AboutUs = () => {

  return (
    <div class="bg">
	<div class="section">
		<div class="container2">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<div class="button">
						<a href="">Read More</a>
					</div>
				</div>
				<div class="social">
					<a href="https://www.facebook.com/Conflu/"><i class="fab fa-facebook-f"></i></a>
					<a href="https://twitter.com/confluencenit"><i class="fab fa-twitter"></i></a>
					<a href="https://www.instagram.com/confluence.nitkkr/?hl=en"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img className='helooo' src={img} />
			</div>
		</div>
	</div>
	</div>
  )  
};

export default AboutUs;