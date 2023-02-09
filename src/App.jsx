import React from "react";
import { useState, useEffect } from "react";
import { Home } from "./components";
import { Skill } from "./components";
import { Project } from "./components";
import { Modal } from "./components";
import { About } from "./components";
import { IoPauseCircle, IoPlayCircle, IoMail } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

import { AiFillMinusCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import items from "./data";

const App = () => {
  const [play, setPlay] = useState(false);
  const [heart, setHeart] = useState(false);
  const [details, setDetails] = useState(items);
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  });
  const nextButton = () => {
    slideIndex == 4
      ? setSlideIndex(1)
      : setSlideIndex((slideIndex) => slideIndex + 1);
    showSlides(slideIndex);
  };
  const prevButton = () => {
    slideIndex == 1
      ? setSlideIndex(4)
      : setSlideIndex((slideIndex) => slideIndex - 1);

    showSlides(slideIndex);
  };
  const navButton = (id) => {
    setSlideIndex(id);
    showSlides(slideIndex);
  };

  const showSlides = () => {
    let slides = document.getElementsByClassName("mySlides");
    let navs = document.getElementsByClassName("nav-button");
    for (let i = 0; i < navs.length; i++) {
      navs[i].className = navs[i].className.replace(" active", "");
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    navs[slideIndex - 1].className += " active";
  };

  const onToggle = (open) => {
    document.querySelectorAll(".nav-button").forEach((element) => {
      // if (!close) {
      //   element.classList.add("nav-button-relative");
      // } else {
      //   element.classList.remove("nav-button-relative");
      // }
      if(open){
        element.classList.remove("nav-button-relative");
      }else{
        element.classList.add("nav-button-relative");
      }
    });
  };
  return (
    <main>
      {/* connect me*/}
      <div className="connect">
        <a
          href="https://discord.com/users/697472816471212103"
          target="blank"
          className="icon"
        >
          <SiDiscord />
        </a>
        <a className="icon">
          <BsLinkedin />
        </a>
        <Modal onToggle={onToggle} />
        {/* <a className="icon"> <IoMail /></a> */}
      </div>
      <section className="main-section">
        {/* navbar */}
        <div className="navbar">
          {details.map((nav_detail, index) => {
            const { id, name } = nav_detail;

            return (
              <button
                className={`nav-button nav-button-relative ${slideIndex === id ? "nav-active" : ""}`}
                onClick={() => navButton(id)}
                key={index}
              >
                {name}
              </button>
            );
          })}
        </div>

        {/* header components */}
        <div className="header">
          {details.map((detail) => {
            // return <Header key={detail.key} {...detail} index={index} />;
            const { name, id, img, start, end } = detail;
            return (
              <article className="mySlides fade" key={id}>
                <div className="header-top">
                  <img src={img} className="photo" />
                  <h1 className="heading-name">{name}</h1>
                </div>
                <div className="header-mid">
                  {slideIndex == 1 && <Home />}
                  {slideIndex == 2 && <About />}
                  {slideIndex == 3 && <Skill />}
                  {slideIndex == 4 && <Project />}
                </div>
                <div className="header-bottom">
                  <div className="time-stamp">
                    <h3>{start}</h3>
                    <h3>{end}</h3>
                  </div>
                </div>
              </article>
            );
          })}

          {/* buttons */}
          <div className="buttons">
            <button className="icon-heart" onClick={() => setHeart(!heart)}>
              {heart ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <button onClick={prevButton}>
              <MdSkipPrevious className="icon-prev" />
            </button>
            <button className="icon-pause" onClick={() => setPlay(!play)}>
              {play ? <IoPlayCircle /> : <IoPauseCircle />}
            </button>
            <button onClick={nextButton}>
              <MdSkipNext className="icon-next" />
            </button>
            <button>
              <AiFillMinusCircle className="icon-minus" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;






