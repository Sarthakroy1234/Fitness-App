import React, { useState } from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png';
import Join from "../Join/Join";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleJoinClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleGoBack = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <button onClick={() => handleJoinClick(plan)}>->Join Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Join Section */}
      {selectedPlan && (
        <Join
          plan={selectedPlan}
          closeJoinSection={handleGoBack}
        />
      )}
    </div>
  );
};

export default Plans;
