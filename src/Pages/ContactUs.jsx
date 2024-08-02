import React from 'react'
import Wrapper from './../Components/Reusable/Wrapper';
import Button from './../Components/Reusable/Button';

const ContactUs = () => {
	let description =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta voluptatibus itaque a fuga nam vitae! Illum iure natus adipisci reiciendis iusto blanditiis consectetur exercitationem molestias? Eos cupiditate iure necessitatibus odit quaerat."
	return (
		<div>
			<Wrapper
                imageSource="https://cdn.pixabay.com/photo/2016/12/15/12/26/contact-us-1908763_1280.png"
				bannerHeading="Contact Us"
				description={description}
			/>
			<section className='buttonSection'>
				<Button buttonText="Contact Us" buttonBg="#5dbea3" />
			</section>
		</div>
	)
}

export default ContactUs
