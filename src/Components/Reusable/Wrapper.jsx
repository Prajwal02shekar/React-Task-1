import React from 'react'
import Style from './wrapper.module.css'

const Wrapper = ({ imageSource, bannerHeading, description }) => {
	return (
		<>
			<div className={Style.wrapperContainer}>
				<img src={imageSource} alt="Image" />
				<section className={Style.overlay}></section>
				<h1>{bannerHeading}</h1>
			</div>
			<p>{description}</p>
		</>

	)
}

export default Wrapper

//? 
