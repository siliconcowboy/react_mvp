import React from "react";

const Button = (props) => {

  return (
    <nav>
      <section className="logo">
        <a href="mlb.com">
      <img src="https://builds.mlbstatic.com/mlb.com/builds/site-core/1606751303311/dist/images/favicon.png" />
      </a>
      </section>
      <ul>
      <li><button><a href="">Highlights</a></button></li>
      <li><button><a href="">News</a></button></li>
      <li><button className="fan"><a href="">Fan Favorites</a></button></li>
      </ul>
    </nav>
  )
};

export default Button;