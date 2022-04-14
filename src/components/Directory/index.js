import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`,
          }}
        >
          <Link to="/search/phone">Shop Phones</Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2174&q=80)`,
          }}
        >
          <Link to="/search/laptop">Shop Laptop</Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
