const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center w-80 mx-auto mb-7">
      <p className="text-yellow-500 mb-1">--- {subHeading} ---</p>
      <h1 className="text-4xl border-y-4 py-2 uppercase">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
