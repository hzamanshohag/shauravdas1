import { dataImage, portfolioHover } from "../utilits";
import { useEffect, useRef, useState } from "react";

import DetailsPopup from "./popup/DetailsPopup";
import Isotope from "isotope-layout";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
            “Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.” - Maya Angelou
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("youtube")}`}
                  onClick={handleFilterKeyChange("youtube")}
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("vimeo")}`}
                  onClick={handleFilterKeyChange("vimeo")}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("soundcloud")}`}
                  onClick={handleFilterKeyChange("soundcloud")}
                >
                  Instagram
                </a>
              </li>
              {/* <li>
                <a
                  className={`c-pointer ${activeBtn("popup")}`}
                  onClick={handleFilterKeyChange("popup")}
                >
                  Popup
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer  ${activeBtn("detail")}`}
                  onClick={handleFilterKeyChange("detail")}
                >
                  Detail
                </a>
              </li> */}
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Anniversary Celebration of Gaan Bangla TV"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/2IBJ5OaQzBM?autoplay=1"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.gif"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Anniversary Celebration of Gaan Bangla TV</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Taposh & Friends Live At Jamalpur"
                    data-category="Facebook"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://www.facebook.com/share/v/hqBduqEJqjvkV9wc/?mibextid=SphRi8&startTimeMs=7000"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.gif"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Taposh & Friends Live At Jamalpur</h3>
                    <span>Facebook</span>
                  </div>
                </div>
              </li>
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Walton Asian Music Episode 889"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/4WjoiaAHGxU?autoplay=1"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.gif"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Walton Asian Music Episode 889</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
               <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Itorpona | Zaman fea"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/RceOPIgNMK4?autoplay=1"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.gif"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Itorpona | Zaman fed</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              {/* <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Art Stone"
                    data-category="Facebook"
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Art Stone</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li> */}
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Nagorik Music"
                    data-category="Facebook"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://www.facebook.com/watch/?v=1487804881725602"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/7.gif"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Nagorik Music</h3>
                    <span>Facebook</span>
                  </div>
                </div>
              </li>

              {/* <li className="detail grid-item" onClick={() => setPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Global Evolution"
                    data-category="Detail"
                  >
                    <a className="portfolio_popup" href="#">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Global Evolution</h3>
                    <span>Detail</span>
                  </div>
                </div>
              </li> */}
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Concert at Memorial Club grounds"
                    data-category="Instagram"
                  >
                    <a
                      className="popup-soundcloud"
                      href="https://www.instagram.com/tv/CpW6VdnjuaD/?igsh=MTJ0aXd6YXdxbHZ3aw=="
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/8.gif"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Concert at Memorial Club grounds</h3>
                    <span>Instagram</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
