import React from "react";

const Hello = () => {
  return (
    <div class="ui three column grid" id="main-container">
      <div class="column">
        <img id="profile-img" src="./src/img/sara3.jpg" />
      </div>

      <div class="column" id="welcome-txt">
        <p>Junior software developer based in Stockholm Sweden</p>
        <p>
          Trying to solve problems, stand on my head and be creative every day{" "}
        </p>
        <p>
          Currently attending the Craft Academy Bootcamp, learning to breathe
          test-driven development, think agile and talk Java Script
        </p>
        <p id="working-with">Working with</p>
        <p>Ruby, Ruby on Rails, JavaScript, ReactJS, React Native, Cypress </p>
      </div>
      <div class="column">
        <h2 id="one-word">Explained in one word</h2>
        <h3 id="focus">Focused</h3>
      </div>
    </div>
  );
};

export default Hello;
