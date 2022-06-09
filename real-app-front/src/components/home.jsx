import PageHeader from "./common/pageHeader";

const Home = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            <i className="fa-solid fa-house"></i> Home Real{" "}
            <i className="fa-solid fa-map-pin"></i> App
          </>
        }
      />
      <div className="row">
        <div className="col-12">
          <p>
            Welcome to Real App Site! We hope you will enjoy it.{" "}
            <i className="fa-solid fa-face-smile"></i>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
