import { aTagClick, fatchData } from "../utilits";
import { useEffect, useState } from "react";

import BlogPopUp from "./popup/BlogPopUp";

const News = () => {
  const [data, setData] = useState([]);
  const [popupData, setPopupData] = useState({});
  const [popup, setPopup] = useState(false);
  // useEffect(async () => {
  //   setData(await fatchData("/static/blog.json"));
  //   aTagClick();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/static/blog.json");
      const data = await response.json();
      setData(data);
      aTagClick();
    };
  
    fetchData();
  }, []);
  return (
    <div className="dizme_tm_section">
      <BlogPopUp open={popup} data={popupData} close={() => setPopup(false)} />
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>My Blog & Recent  Updates</span>
            <h3>{`Stay tuned for more`}</h3>
          </div>
          <div className="news_list">
            <ul>
              {data &&
                data.map((blog, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/42-29.jpg" alt="image" />
                        <div
                          className="main"
                          data-img-url={blog && blog.img}
                          style={{
                            backgroundImage: `url(${blog && blog.img})`,
                          }}
                        />
                        <div className="date">
                          <h3>{blog && blog.date && blog.date.date}</h3>
                          <span>{blog && blog.date && blog.date.month}</span>
                        </div>
                        {/* <a
                          className="dizme_tm_full_link"
                          href={blog.url}
                          onClick={() => {
                            setPopupData(blog && blog);
                            setPopup(true);
                          }}
                          
                        /> */}
                        <a
                          className="dizme_tm_full_link"
                          href={blog.url}
                        />
                      </div>
                      <div className="details">
                        {/* <span className="category">
                          <a href={blog.url}>{blog.category}</a>
                        </span> */}
                        <h3 className="title">
                          <a href={blog.url}>{blog.title}</a>
                        </h3>
                      </div>
                      <div className="news_hidden_details">
                        <div className="news_popup_informations">
                          <div className="text">
                            {blog.details &&
                              blog.details.map((details, i) => (
                                <p key={i}>{details}</p>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default News;
