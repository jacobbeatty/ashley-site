const FaqItem = ({ faq }) => {
  return (
    <>
      <li className=" font-bold">{faq.faqQuestion}</li>
      <li>{faq.faqAnswer}</li>
      <br></br>
    </>
  );
};

export default FaqItem;
