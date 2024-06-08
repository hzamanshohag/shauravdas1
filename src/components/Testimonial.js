import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { useEffect, useState } from "react";

import { fatchData } from "../utilits";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

const Testimonial = () => {
  const [data, setData] = useState([]);
  // useEffect(async () => {
  //   setData(await fatchData("/static/testimonial.json"));
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/static/testimonial.json");
      const data = await response.json();
      setData(data);
    };
  
    fetchData();
  }, []);

  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
  };

  return (
    <div className="dizme_tm_section" id="blog">
      <div className="dizme_tm_testimonials">
        <div className="dizme_tm_main_title" data-align="center">
          <span>Certifications</span>
          <h3>Winning an award is always a special moment</h3>
          <p>
            For me the best thing about winning an award is when the people
            cheer for your win. When you can see that the people are really
            happy that you are winning something, thats the most reward
            thing in the world.
          </p>
        </div>
        <div className="list_wrapper">
          <div className="total">
            <div className="in">
              <Swiper {...props} className="">
                {data &&
                  data.map((data, i) => (
                    <SwiperSlide key={i}>
                      {/* <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          width="200px"
                          height="200px"
                          viewBox="796 698 200 200"
                          enableBackground="new 796 698 200 200"
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z" />
                            <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z" />
                          </g>
                        </svg>
                      </div> */}
                      <div className="text">
                        {/* <p>{data.details}</p> */}
                        <img
                          src={data.img}
                          style={{ width: "700px", height: "472px" }}
                          alt="img"
                        />
                      </div>
                      {/* <div className="short">
                        <h3>{data.name}</h3>
                      </div> */}
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="owl-dots"></div>
            </div>
            <div className="left_details">
              <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/icon3.png"
              />
              <div
                className="det_image two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-img-url="img/testimonials/icon1.png"
              />
              <div
                className="det_image three wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-img-url="img/testimonials/icon2.png"
              />
              <div
                className="det_image four wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
                data-img-url="img/testimonials/icon6.png"
              />
              <span className="circle green animPulse" />
              <span className="circle yellow animPulse" />
              <span className="circle border animPulse" />
            </div>
            <div className="right_details">
              <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/icon5.png"
              />
              <div
                className="det_image two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-img-url="img/testimonials/icon8.png"
              />
              <div
                className="det_image three wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-img-url="img/testimonials/icon7.png"
              />
              <span className="circle yellow animPulse" />
              <span className="circle purple animPulse" />
              <span className="circle border animPulse" />
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/testimonials/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
