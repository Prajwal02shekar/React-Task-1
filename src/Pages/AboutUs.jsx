import React from 'react'
import Wrapper from './../Components/Reusable/Wrapper';
import Button from './../Components/Reusable/Button';

const AboutUs = () => {
	let description =
		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut vitae inventore, rerum exercitationem odio est!"
	return (
		<div>
			<Wrapper
				imageSource="https://www.wipro.com/content/dam/nexus/staticsites/homepage/wipro-75-years-history.png"
				bannerHeading="About Us"
				description={description}
			/>
			<section className='buttonSection'>
				<Button buttonText="Click here to know about us" buttonBg="#5783db" />
			</section>
		</div>
	)
}

export default AboutUs
