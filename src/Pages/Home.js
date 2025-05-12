
    
    import React from 'react';
    import 'bootstrap/dist/css/bootstrap.css';
    import Carousel from 'react-bootstrap/Carousel';

import Product from "./Products";

export default function Home(){
    return(
        <>
 
        <Slider/>
        <AboutUs/>
        <Product/>
        </>
    )
}

function Slider() {
  return (
    <div style={{ display: 'block', width: '100%', objectFit: "cover" }}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/top-view-delicious-meat-soup-with-greens-potatoes-dark-desk_140725-76536.jpg?ga=GA1.1.1388559410.1737954646&semt=ais_hybrid"
            alt="Image One"
            style={{ height: "500px", objectFit: "cover" }} // Ensures the image covers the area
          />
          <Carousel.Caption>
            <h3 className="text-warning">Label for first slide</h3>
            <p className="text-light">Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/top-view-vegetables-lentil-spices-tomatoes-pepper-plate-dish-cutting-board_140725-73861.jpg?t=st=1743431343~exp=1743434943~hmac=8f522428f336bf9e83d168e2cf1d3e042065650b637be7f5fc6e5ec40eeb7f91&w=996"
            alt="Image Two"
            style={{ height: "500px", objectFit: "cover" }} // Ensures the image covers the area
          />
          <Carousel.Caption>
            <h3 className="text-warning">Label for second slide</h3>
            <p className="text-light">Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/modern-woman-cooking_23-2148020496.jpg?t=st=1743431430~exp=1743435030~hmac=aa0f0634872af8c7c7c49205a8cae84c2802c8e901c0cd853b6fd7f3618708a2&w=900"
            alt="Image Three"
            style={{ height: "500px", objectFit: "cover" }} // Ensures the image covers the area
          />
          <Carousel.Caption>
            <h3 className="text-warning">Label for third slide</h3>
            <p className="text-light">Sample Text for Image Three</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


function AboutUs() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-3">
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/make-create-pizza-conceptual-composition-with-flat-images_1284-15374.jpg?t=st=1743432541~exp=1743436141~hmac=0e9c65f8fbcd4a04d41807be6ac354094c2c585563adc907ce350b0d503a7fe7&w=826"
            alt="Cooking Concept"
            style={{ height: "500px", objectFit: "cover", marginLeft: "15px" }} // Adds margin to the left
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <h4 className="text-warning">About Us</h4>
          <p>
            At Infolabz Cooking, we believe that cooking is not just a necessity; it’s an art form, a way to express creativity, and a means to bring people together. Our mission is to inspire home cooks of all skill levels to explore the culinary world, discover new flavors, and create delicious meals that nourish both the body and soul.
          </p>
          <p>
            Founded in [Year], our journey began with a simple love for food and the joy of sharing it with others. We understand that cooking can sometimes feel daunting, which is why we provide easy-to-follow recipes, cooking tips, and a supportive community to help you every step of the way.
          </p>
          <p>
            Whether you’re looking to impress your family with a gourmet meal or simply want to whip up a quick snack, we have something for everyone. Our diverse collection of recipes caters to various dietary preferences, including vegetarian, vegan, and gluten-free options.
          </p>
          <p>
            Join us as we celebrate the joy of cooking and the magic of sharing meals with loved ones. Together, let’s create unforgettable culinary experiences that bring happiness to our tables and hearts.
          </p>
        </div>
      </div>
    </div>
  );
}
