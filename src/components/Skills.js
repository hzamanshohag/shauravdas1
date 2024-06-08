import { activeSkillProgress, fatchData } from "../utilits";
import { useEffect, useState } from "react";

const Skills = ({ dark }) => {
  const [data, setData] = useState({});
  // useEffect(async () => {
  //   setData(await fatchData("/static/info.json"));
  // }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/static/info.json");
      const data = await response.json();
      setData(data);
      console.log(data.skills);
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>Music is Life</span>
                <h3>I Develop Skills Regularly to Keep Me Update</h3>
                {/* <p>
                  Most common methods for designing websites that work well on
                  desktop is responsive and adaptive design
                </p> */}
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
                {/* {data &&
                  data.skills &&
                  data.skills.map((skill, i) => (
                    <div
                      className="progress_inner skillsInner___"
                      data-value={skill.value}
                      data-color={skill.color}
                      key={i}
                    >
                      <span>
                        <span className="label">{skill.name}</span>
                        <span className="number">{skill.value}%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
                  ))} */}
                  <div
                      className="progress_inner skillsInner___"
                      data-value="85"
                      data-color="rgb(247, 80, 35)"
                    >
                      <span>
                        <span className="label">Vocal</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
                  <div
                      className="progress_inner skillsInner___"
                      data-value="95"
                      data-color="rgb(28, 190, 89)"
                    >
                      <span>
                        <span className="label">Keyboard</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
                  <div
                      className="progress_inner skillsInner___"
                      data-value="85"
                      data-color="rgb(128, 103, 240)"
                    >
                      <span>
                        <span className="label">Piano</span>
                        <span className="number">75%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
              </div>
            </div>
            <div className="right">
              <img src={`img/skills/${dark ? 2 : 1}.png`} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
