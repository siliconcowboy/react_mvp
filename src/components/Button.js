import React from "react";

const Button = (props) => {

  return (
    <nav>
      <section className="logo">
      <img src="./all_stars.jpg" />
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