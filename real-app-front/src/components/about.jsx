import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            <i className="fa-solid fa-circle-info"></i> About Real{" "}
            <i className="fa-solid fa-map-pin"></i> App
          </>
        }
      />
      <div className="row">
        <div className="col-12">
          <p>
            In this site business accounts can create their business cards,
            there are also options to edit and delete card. Moreover, private
            members can sign up and will be update according to more stuff
            should come. We would like to see you register to our site and
            become awesome part from our community!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
