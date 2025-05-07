import PropTypes from "prop-types";
import React from "react";
import avatarImage from "..//assets/myAvatar2.png";
import "..//styles/avatar.css";

const Avatar = ({page}) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
    <span className={spanClass}></span>
    <img src={avatarImage} className = {avatarClass} alt="avatar"></img>
    </>
  );
};

Avatar.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Avatar;