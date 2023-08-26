import React from "react";
import "../styles/styles.css";

import "../component/ProviderList";

function LandingPage() {
  return (
    <>
      <div className="header">
        <div className="overlay"></div>
        <div className="text"> Increasing access to healthcare </div>
      </div>

      <section class="facts-section">
        <h2 class="facts-header">Did You Know?</h2>
        <div class="facts-images">
          <div class="fact-image">
            <img src={require("../fact1.png")} alt="Fact 1" />
          </div>
          <div class="fact-image">
            <img src={require("../fact2.png")} alt="Fact 2" />
          </div>
          <div class="fact-image">
            <img src={require("../fact3.png")} alt="Fact 3" />
          </div>
        </div>
      </section>

      <div class="health-about-section">
        <img
          src={require("../image/solution.png")}
          className="health-about-img"
          alt=""
        />
        <div class="health-about-content">
          <h5 className="health-secondary-heading"> Our Solution </h5>
          <h2 className="health-heading"> Primary care in minutes</h2>
          <p class="paragraph">
            Talk to a board-certified doctor of your choice, by phone or
            video.Affordable, hassle-free,telehealth appointments from quality
            healthcare providers on your schedule. No membership fees, no
            surprise bills, no insurance needed.
          </p>
          <button className="doctor-btn">Find My Doctor</button>
        </div>
      </div>

      <section className="benefits-section">
        <div className="benefit">
          <img src="" className="benegit-img" alt="" />
          <h5 className="benefit-header"> Improve Care Coordination</h5>
          <p className="benefit-text">
            {" "}
            Support more timely, cost-effective interventions, with fewer ER
            visits and reduced re-admissions
          </p>
        </div>
        <div className="benefit">
          <img src="" className="benegit-img" alt="" />
          <h5 className="benefit-header"> Expanded Reach </h5>
          <p className="benefit-text">
            Telehealth breaks down geographical barriers, allowing patients in
            rural or underserved areas to connect with specialists and
            healthcare providers who might be located far away.{" "}
          </p>
        </div>
        <div className="benefit">
          <img src="" className="benegit-img" alt="" />
          <h5 className="benefit-header"> Reduced Wait Times</h5>
          <p className="benefit-text">
            {" "}
            Telehealth appointments can reduce wait times since they are
            typically scheduled more efficiently, leading to quicker access to
            medical advice, prescriptions, and treatment plans.
          </p>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
