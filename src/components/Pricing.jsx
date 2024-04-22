import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../components/components.scss";

const apiString = `https://nodejs-student-api-hg21.onrender.com/students`;

// This following section will display the form that takes the input from the user.

export default function Pricing() {
  return (
    <div className="angled-bg">
      <div className="pricing-wrapper">
        <h1>Plans and Pricing</h1>
        <div className="card-container">
          <div className="card-bg">
            <div className="card-wrapper">
              <h2>Student Plan</h2>
              <h1>
                $4.99 / <br /> Month
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                dicta placeat dolores labore eligendi facere voluptatum minima
                unde! Dolorum voluptatem molestiae velit quibusdam odio
                laudantium.
              </p>
              <a href="#" className="btn btn-dark sign-up">
                <h4>Sign up</h4>
              </a>
            </div>
          </div>
          <div className="card-bg">
            <div className="card-wrapper">
              <h2>Teacher Plan</h2>
              <h1>$24.99 / Month</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                dicta placeat dolores labore eligendi facere voluptatum minima
                unde! Dolorum voluptatem molestiae velit quibusdam odio
                laudantium.
              </p>
              <a href="#" className="btn btn-dark sign-up">
                <h4>Sign up</h4>
              </a>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eius
          optio dolorem aliquid quae praesentium id ut officia? Praesentium
          quaerat atque aliquid. Aspernatur fugit fuga possimus reprehenderit
          rem obcaecati repellendus maxime doloribus iusto voluptatem explicabo
          vel, quisquam nostrum molestiae delectus? Eligendi ea consequatur illo
          odit eius asperiores quam possimus aliquid.
        </p>
      </div>
    </div>
  );
}
