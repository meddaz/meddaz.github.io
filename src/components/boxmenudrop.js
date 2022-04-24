import "./boxmenudrop.css";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/e-logo.png"
import li from "../images/linkedIn-icon.png"
import gh from "../images/github-icon.png"
import news from "../images/newspaper.png"
import suitcase from "../images/suitcase.png"
import email from "../images/gmail-icon.png"
import img from "../images/image.png"
import about from "../images/info.png"


const BoxMenuDrop = () => {
  const [isActive, setActive] = useState("false");

  // Toggle the dropdown
  const handleToggle = () => {
    setActive(!isActive);
  };

  // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setActive(!!isActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideHandler(wrapperRef);

  return (
    <div className="dropdown" onClick={handleToggle} ref={wrapperRef}>
      <FontAwesomeIcon className="fas fa-th dropbtn" icon={faTh} />
      <div
        id="drop"
        className={
          isActive
            ? "dropdown-content-cont dropdown-hide"
            : "dropdown-content-cont dropdown-show"
        }
      >
        <div className="drop-item">
          <Link className="drop-link" to="/">
            <img
              src={logo}
              alt=""
            />
            <p> Search </p>
          </Link>
          <Link  className="drop-link" to="/about">
            <img
              src={about}
              alt=""
            />
            <p> About </p>
          </Link >
          <Link  className="drop-link" to="/projects">
            <img
              src={suitcase}
              alt=""
            />
            <p> Projects </p>
          </Link >
    
          <a className="drop-link" href="mailto:zegergism@gmail.com">
            <img
              src={email}
              alt=""
            />
            <p> Email </p>
          </a>
          <a className="drop-link" href="https://github.com/meddaz">
            <img
              src={gh}
              alt=""
            />
            <p> GitHub </p>
          </a>
          </div>
      </div>
    </div>
  );
};

export default BoxMenuDrop;
