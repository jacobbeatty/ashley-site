const AboutCard = ({ aboutType }) => {
  return (
    <div className=" mb-2 w-[100%] lg:w-[49%] 2xl:w-[32%] bgClear">
      <h1 className="bg-blue text-green text-center body-text-sizing">
        <strong>
          <em>{aboutType.typeName}</em>
        </strong>
      </h1>
      <div className="group hover:">
        <img
          className="w-[100%] object-cover   duration-300 "
          src={aboutType.typeImage.file.url}
        />
        <p className=" font-bold p-5 body-text-sizing whitespace-pre-wrap text-center w-fit group-hover:opacity-100">
          {aboutType.typeBody}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
