import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../components/components.scss";

const apiString = `https://nodejs-student-api-hg21.onrender.com/students`;

// This following section will display the form that takes the input from the user.

export default function Pricing() {
  return (
    <div className="about-background">
      <div className="text-center about-title">
        <h1>Our mission</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          quasi sint blanditiis odio facilis fuga nisi non, natus veniam
          officiis dolor eius maxime nesciunt optio fugit magni consequatur ea
          excepturi expedita, omnis aut autem. Quasi ex soluta quas, molestias
          sequi itaque a qui! Expedita, quidem!
        </p>
      </div>
      <div className="about-card">
        <div className="image-wrapper">
          <img
            src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="image-wrapper">
          <img
            src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="text-center about-title">
        <h1>Our story</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          consequatur provident facilis dicta natus, eaque sed nam unde harum
          sint odio aliquid fugiat tenetur doloremque in voluptate perspiciatis
          dolorum repudiandae? Repellat, eius explicabo. Fugiat aliquam
          possimus, deserunt ab nulla alias corrupti eveniet? Unde, suscipit at
          provident quaerat dolorum repellat corrupti nulla, blanditiis
          necessitatibus assumenda illum dolores numquam fugiat rerum, eum est!
          Ipsa omnis non libero vel?
        </p>
      </div>
      <div className="about-card">
        <div className="image-wrapper">
          <img
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
