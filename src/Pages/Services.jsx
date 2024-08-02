import React from 'react'
import Wrapper from './../Components/Reusable/Wrapper';
import Button from './../Components/Reusable/Button';

const Services = () => {
    let description =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta voluptatibus itaque a fuga nam vitae! Illum iure natus adipisci reiciendis iusto blanditiis consectetur exercitationem molestias? Eos"
    return (
        <div>
            <Wrapper
                imageSource="https://cdn.pixabay.com/photo/2015/10/31/11/58/call-center-1015274_1280.jpg"
                bannerHeading="services"
                description={description}
            />
            <section className='buttonSection'>
                <Button buttonText="Click here for more services" buttonBg="#5783db" />
            </section>

        </div>
    )
}

export default Services