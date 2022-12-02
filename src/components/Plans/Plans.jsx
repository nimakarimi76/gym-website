import React from "react";
import "./Plans.css";

import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="plans-heading">
        <span className="stroke-text">Ready to start</span>
        <span>Your journey</span>
        <span className="stroke-text">Now with US</span>
      </div>

      {/* plans cards */}
      <div className="plans">
        {plansData.map((plan, index) => {
          return (
            <div className="card" key={index}>
              <div className="icon"> {plan.icon}</div>
              <div className="title">{plan.name}</div>
              <div className="price">$ {plan.price}</div>
              <div className="features">
                {plan.features.map((feature, index) => {
                  return (
                    <div key={index}>
                      <img src={whiteTick} className="tick" />
                      {feature}
                    </div>
                  );
                })}
              </div>
              <div className="more">See more benefits</div>
              <button className="btn">Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
