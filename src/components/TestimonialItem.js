const TestimonialItem = ({ testimonial }) => {
  return (
    <>
      <li className=" italic list-none">"{testimonial.testimonialBody}"</li>
      <br></br>
    </>
  );
};

export default TestimonialItem;
