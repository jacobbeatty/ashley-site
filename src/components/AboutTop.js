import ReactMarkdown from "react-markdown";

const AboutTop = ({ aboutTop }) => {
  return (
    <div className="flex flex-col md:flex-row md:pb-8">
      <div className="w-[100%] lg:w-[68%] bgClear p-5">
        <h1 className="text-xl md:text-4xl ">
          <strong>
            <em> {aboutTop.aboutTopHeader}</em>
          </strong>
        </h1>
        <p className="body-text-sizing whitespace-pre-line">
          <ReactMarkdown>{aboutTop.aboutTopBody}</ReactMarkdown>
        </p>
      </div>
      <img
        className="hidden lg:block w-[55%] xl:w-[40%] object-cover object-top z-10"
        src={aboutTop.aboutTopImage.file.url}
        alt="horse and lady"
      />
    </div>
  );
};

export default AboutTop;
