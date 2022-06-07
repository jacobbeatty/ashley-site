const MemberCard = ({ herdMember }) => {
  return (
    <div className=" m-2 w-[99%]   min-w-[37%] bgClear text-webkit-center">
      <div className="group hover:">
        <img
          className="group-hover:blur-lg group-hover:opacity-40  duration-300 w-[100%]  object-cover h-[100%]"
          src={herdMember.herdImage.file.url}
        />
        <p className="middle p-5 body-text-sizing whitespace-pre-wrap text-center w-fit group-hover:opacity-100">
          {herdMember.herdBio}
        </p>
      </div>
      <h1 className="bg-blue text-green text-center body-text-sizing">
        <strong>
          <em>{herdMember.herdName}</em>
        </strong>
      </h1>
    </div>
  );
};

export default MemberCard;
