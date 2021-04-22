import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  const onClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <Button text={showAddTask ? "Close" : "Add"} onClick={onAdd} />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
