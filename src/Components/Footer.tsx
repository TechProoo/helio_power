import Logo from "../Image/techPro.png";

const Footer = () => {
  return (
    // <footer className="">
    //   <div className="d-flex px-2 mt-5 justify-content-between align-items-center">
    //     <div className="">
    //       <b className="logo_name text-black footer_name ft_hd pt-2">
    //         Helio
    //         <span className="logo_subName">Power</span>
    //       </b>
    //     </div>
    //     <div className="footer_rights">
    //       © 2025. <b>HELIO </b>All Rights Reserved.
    //     </div>
    //     <div className="d-flex my_self align-items-center d-xs-none justify-content-center">
    //       <span>DEVELOPED BY</span>
    //       <img src={Logo} className="img-fluid techPro footer_logo" alt="" />
    //     </div>
    //   </div>
    // </footer>
    <div className="container">
      <footer className="d-flex ps-3 flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-6 mb-0 text-body-secondary text-center footer_rights">
          © 2025. <b>HELIO </b>All Rights Reserved.
        </p>

        <a
          href="/"
          className="col-md-6 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none ffff"
        >
          <span>Developed by</span>
          <div className="footer_logo">
            <img src={Logo} className="img-fluid techPro " alt="" />
          </div>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
