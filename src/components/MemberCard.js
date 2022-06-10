const MemberCard = ({ herdMember }) => {
  return (
    <div className=" m-2 w-[99%]   min-w-[37%] bgClear text-webkit-center">
      <div className="group hover:">
        <img
          className=" duration-300 w-[100%]  object-cover h-[100%]"
          src={herdMember.herdImage.file.url}
        />
        <h1 className="bg-blue text-green text-center body-text-sizing">
          <strong>
            <em>{herdMember.herdName}</em>
          </strong>
        </h1>
        <p className=" p-5 body-text-sizing whitespace-pre-wrap text-center w-fit group-hover:opacity-100">
          {herdMember.herdBio}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
