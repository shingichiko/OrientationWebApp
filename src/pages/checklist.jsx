import React from "react";
import StudentSupport from "../components/features/studentSupport";
import "../App.css";

const ChecklistPage = () => {
  return (
    <div className="col-9">
      <div className="card">
      <h1>Checklist and Student Support</h1>
              <p>Before you start uni, it is essential to get a couple of tasks done 
                  to have a smooth start to the semester. This website contains all the information and steps
                   you need to carry out before the semester starts, and the checklist below servers as a refresher to help 
                   you make sure you haven't forgotten anything, because that's what we are here for. We have divided the essentials to 
                   make it easier for you.
              </p>
              <div className="card">
                  <h3>Admin Essentials</h3>
                  <ul>
                      <li>Get information on getting a <a href="#">student card</a></li>
                      <li>Find out about <a href="">setting up and account, software and systems</a></li>
                      <li>Read on university <a href="https://policies.newcastle.edu.au/">policies and modules</a></li>
                  </ul>
                  <h3>Orientation</h3>
                  <ul>
                      <li>Attend Orientation</li>
                      <li>Get familiar with campus and locations during campus tours.</li>
                      <li>Learn more about your degree.</li>
                      <li>Find out about student support.</li>
                  </ul>
                  <h3>Study Essentials</h3>
                  <ul>
                      <li>Read on <a href="">Plagiarism</a></li>
                      <li>Check out the free <a href="https://www.newcastle.edu.au/study/pathways/nuprep">UON prep courses</a></li>
                      <li>Visit the <a href="https://libguides.newcastle.edu.au/orientation">library</a> guide</li>
                      <li>Try out the Ready for Uni quiz</li>
                  </ul>
                  <h3>Getting started</h3>
                  <ul>
                      <li>Familiarise with the university <a href="">map</a></li>
                      <li>Save <a href="">Important dates </a>for this semester</li>
                      <li>Join <a href="https://www.newcastle.edu.au/current-students/uni-life/clubs-and-societies">clubs and societies</a></li>
                      <li>Have fun!</li>
                  </ul>

              </div>
        <StudentSupport/>

      </div>
    </div>
  );
};

export default ChecklistPage;