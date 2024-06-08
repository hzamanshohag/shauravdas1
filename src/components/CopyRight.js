const CopyRight = ({ brandName }) => {
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
                Developed with love by{" "}
                <a
                  href="https://www.linkedin.com/in/hzaman-shohag"
                  target="_blank"
                  rel="noreferrer"
                >
                  {"Hzaman"}
                </a>{" "}
              </p>
            </div>
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
              Copyright @2024. All Rights Reserved:{" "}
                <a
                  href="https://www.facebook.com/shaurav.das"
                  target="_blank"
                  rel="noreferrer"
                >
                  {"Shaurav Das"}
                </a>{" "}
              </p>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>
                <li>
                  <a href="#">{`Terms & Condition`}</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
