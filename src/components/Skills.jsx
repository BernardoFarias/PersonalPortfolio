import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                          <br/><br/>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"} alt="Javascript"></img>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={"https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"} alt="ReactJS"></img>
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={"https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"} alt="NodeJS"></img>
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"} alt="NodeJS"></img>
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={"https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/redux.png"} alt="Redux"></img>
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={"https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/psql.png"} alt="Postgresql"></img>
                                <h5>Postgresql</h5>
                            </div>
                            <div className="item">
                                <img src={"https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"} alt="Express"></img>
                                <h5>ExpressJS</h5>
                            </div>
                            <div className="item">
                                <img src={"https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"} alt="Bootstrap"></img>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"} alt="Tailwind"></img>
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={"https://www.vectorlogo.zone/logos/figma/figma-icon.svg"} alt="Figma"></img>
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"} alt="HTML"></img>
                                <h5>HTML 5</h5>
                            </div>
                            <div className="item">
                                <img src={"https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"} alt="CSS"></img>
                                <h5>CSS 3</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image1" />
    </section>
      )
}