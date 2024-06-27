import React from 'react'

const Aboutme = () => {
  return (
    <div className='flex flex-col gap-10 px-10 text-justify [&>*]:space-y-[10px]'>
      <div className='mt-10 text-center mx-auto'>
        <h1 className='text-5xl'>Furniro.</h1>
      </div>

      <div>
        <h2>About Us</h2>
        <p>
          Welcome to Furniro, where creativity meets comfort. We are a company
          specializing in furniture, committed to providing high-quality
          furniture pieces designed to beautify and enrich your space.
        </p>
      </div>

      <div>
        <h2>Our Vision</h2>
        <p>
          At Furniro, our vision is to become a leader in the furniture industry
          by offering products that are not only functional but also
          aesthetically pleasing. We believe that every home reflects the
          personality of its inhabitants, and our furniture is designed to
          reflect beauty, comfort, and your lifestyle.
        </p>
      </div>

      <div>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide innovative, durable, and affordable
          furniture for every customer. We are committed to delivering the
          latest designs with the best quality, ensuring that every product we
          offer meets the highest standards.
        </p>
      </div>

      <div>
        <h2>Our Values</h2>
        <ol className='list-decimal ml-5'>
          <li>
            Quality: We use only the best materials and the latest production
            techniques to ensure that every product we create is of the highest
            quality.
          </li>
          <li>
            Innovation: We continuously seek new and creative ways to enhance
            the design and functionality of our furniture.
          </li>
          <li>
            Customer Satisfaction: Your satisfaction is our top priority. We are
            always ready to listen to your needs and desires to provide the best
            service.
          </li>
          <li>
            Sustainability: We care about the environment and strive to use
            eco-friendly materials and sustainable production practices.
          </li>
        </ol>
      </div>

      <div>
        <h2>Our Products</h2>
        <p>
          From living rooms to bedrooms, kitchens to home offices, Furniro
          offers a wide range of furniture to meet all your needs. Each of our
          products is meticulously designed to provide maximum beauty and
          comfort
        </p>
      </div>
    </div>
  )
}

export default Aboutme
