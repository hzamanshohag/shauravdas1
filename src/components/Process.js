import { useEffect, useState } from "react";

import { fatchData } from "../utilits";
import parse from "html-react-parser";

const Process = ({ dark }) => {
  const [data, setData] = useState([]);
  // useEffect(async () => {
  //   setData(await fatchData("/static/workProcess.json"));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/static/workProcess.json");
      const data = await response.json();
      setData(data);
    };
  
    fetchData();
  }, []);

  return (
    <div className="dizme_tm_section" id="process">
      <div className="dizme_tm_process">
        <div className="container">
          <div className="list">
            <ul>
              {data &&
                data.map((data, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="icon">
                        <span>
                          <img
                            className="brush"
                            src={`img/brushes/process${dark ? "/dark" : ""}/${
                              i + 1
                            }.png`}
                            alt="image"
                          />
                          {parse(data.icons[dark ? "dark" : "light"])}
                        </span>
                      </div>
                      <div className="title">
                        <h3>{data.title}</h3>
                      </div>
                      <div className="text">
                        <p>{data.dec}</p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
