const Footer = () => {
  return (
    <p className="border-top pt-3 text-center text-white">
      <span>
        Real <i className="fa-solid fa-map-pin"></i> App
      </span>
      <span className="mx-1">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </p>
  );
};

export default Footer;
