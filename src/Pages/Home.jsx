import React from 'react'
import Wrapper from '../Components/Reusable/Wrapper'
import Button from '../Components/Reusable/Button'

const Home = () => {
	let description =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta voluptatibus itaque a fuga nam vitae! Illum iure natus adipisci reiciendis iusto blanditiis consectetur exercitationem molestias? Eos cupiditate iure necessitatibus odit quaerat. Asperiores ipsam quo ipsa quisquam unde exercitationem nulla, doloribus sit repudiandae soluta odit, quae rem iusto eum nobis fugiat autem cupiditate minus odio ab. Debitis molestias impedit ipsam officia dolore veritatis consequatur adipisci exercitationem vel ut harum quidem tempore."
	return (
		<div>
			<Wrapper 
				imageSource="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg"
                bannerHeading="home sweet home" 
                description={description}
			/>
			<section className='buttonSection'>
				<Button buttonText="Search Home" buttonBg="#5783db" />
				<Button buttonText="Find Home" buttonBg="#5dbea3" />
			</section>
		</div>
	)
}

export default Home
