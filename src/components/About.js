import Counter from "./Counter";

const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.png`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={15} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={5} />K
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a Musician`}</span>
                <h3>Where Words Fail, Music Speaks</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p className="abouttext">
                  {`I worked relentlessly and started engaging actively in performances alongside renowned artists such as Subir Nandi, Rizia Parveen, Sabina Yasmin, Mila, Dinat Jahan Munni, SI Tutul, Swapnil Sabbir, Pulok, and bands like Different Touch, among others. Currently, in conjunction with popular stars and studio sessions, Shaurav Das is an integral member of contemporary singer Reshmi Mirza's band - "Mati". Shaurav Das has also showcased his talent as an artist on Gaan Bangla Television, the only dedicated Music Channel of Bangladesh, further solidifying his presence and impact in the country's music industry.`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
