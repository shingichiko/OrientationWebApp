import React from "react";
import Collapsible from "react-collapsible";
import "../App.css";

const StudentIDPage = () => {
  return (
    <div className="col-9">
      <div className="card">
        <div className="bodyF">
          <h1>All you need to know about your student ID</h1>

          <div class="collapsibleDivMain">
            <p>
              <br></br>
              <strong>The Basics</strong>
              <br></br>
            </p>

            <Collapsible trigger={<Trigger1 />}>
              <div class="collapsibleDiv">
                <p class="pText">
                  Your Student ID Card is your passport to UON's libraries,
                  computers and travel concessions. Your card is current while you
                  are enrolled at the University of Newcastle.
                </p>
              </div>
            </Collapsible>

            <Collapsible trigger={<Trigger2 />}>
              <div class="collapsibleDiv">
                <p class="pText">
                  Your Student ID Card is required for on campus identification.It
                  is used to access UON's libraries, computers, discounts at a
                  variety of shops and organisations in and around the campus, and
                  acts as your transport concession (with your Opal card).
                </p>
              </div>
            </Collapsible>

            <Collapsible trigger={<Trigger3 />}>
              <div class="collapsibleDiv">
                <p class="pText">
                  If you are applying for your first ever Student ID Card,{" "}
                  <a href="https://askuon.newcastle.edu.au/app/student_id_card">
                    upload your photo here
                  </a>
                  . You will receive notification advising you when and where to
                  collect your card.
                </p>

                <Collapsible trigger={<Trigger4 />}>
                  <div class="collapsibleDivChild">
                    <p class="pText">
                      You will be required to provide your student number and photo
                      identification on collection.
                    </p>
                  </div>
                </Collapsible>

                <Collapsible trigger={<Trigger5 />}>
                  <div class="collapsibleDivChild">
                    <p class="pText">
                      You can obtain your Student ID Card from Student Central any
                      time between 9am and 5pm Monday to Friday.
                    </p>
                  </div>
                </Collapsible>
              </div>
            </Collapsible>

            <p>
              <br></br>
              <strong>Useful Assistance</strong>
              <br></br>
            </p>

            <Collapsible trigger={<Trigger5 />}>
              <div class="collapsibleDiv">
                <p class="pText">
                  You can obtain your Student ID Card from Student Central any time
                  between 9am and 5pm Monday to Friday.
                </p>
              </div>
            </Collapsible>

            <Collapsible trigger={<Trigger6 />}>
              <div class="collapsibleDiv">
                <p class="pText">
                  You will be required to provide one of the following:
                  <br></br>
                  Current Australian driver's licence
                  <br></br>
                  Valid passport
                  <br></br>
                  RTA proof of age card
                </p>

                <Collapsible trigger={<Trigger7 />}>
                  <div class="collapsibleDivChild">
                    <p class="pText">
                      If you're under 18 years, you will be required to provide one
                      of the following:
                      <br></br>
                      Current Australian driver's licence
                      <br></br>
                      Valid passport
                    </p>
                  </div>
                </Collapsible>
              </div>
            </Collapsible>

            <Collapsible trigger={<Trigger8 />}>
              <div class="collapsibleDiv">
                <p class="pText">
                  If your Student ID Card has been lost or stolen, you can pay for a{" "}
                  <a href="https://payments.newcastle.edu.au/OneStopWeb/StudentPayments/menu">
                    replacement card
                  </a>{" "}
                  online and collect your replacement card from your nearest Student
                  Central location.
                  <br></br>
                  <br></br>
                  Note: your previous photo will be used when printing your
                  replacement card. Port Macquarie students will receive an email
                  when their replacement Student ID Card is ready for collection.
                </p>
              </div>
            </Collapsible>

            <Collapsible trigger={<Trigger9 />}>
              <div class="collapsibleDiv">
                <p class="pText">
                  You may also be entitled to a{" "}
                  <a href="https://www.newcastle.edu.au/current-students/uni-life/campus/getting-to-campus/travel-concessions">
                    travel concession
                  </a>{" "}
                  if you're a full time, on-campus student.
                </p>
              </div>
            </Collapsible>

            <p>
              <br></br>
              <strong>Helpful tips</strong>
              <br></br>
            </p>

            <Collapsible trigger={<Trigger10 />}>
              <div class="collapsibleDiv">
                <p class="pText">
                  Your ID Card is an important tool when navigating your way through
                  campus facilities, having your ID on you when travelling to and
                  from class or campus, ensures you have acces to the libraries,
                  computers, after hours access to facilities, and travel
                  concessions.
                </p>
              </div>
            </Collapsible>

            <Collapsible trigger={<Trigger11 />}>
              <div class="collapsibleDiv">
                <p class="pText">
                  Loosing or damaging your ID can be daunting, requiring you to
                  order a replacement, However there are several ways you can avoid
                  this from occurring
                  <br></br>
                </p>
              </div>
            </Collapsible>

            <Collapsible trigger={<Trigger12 />}>
              <div class="collapsibleDiv">
                <p class="pText">
                  You should treat your student identification card with the same
                  security as you would your bank debit or credit card. You should
                  <strong> not</strong> give your student card to anyone else to use
                  and you should <strong> not</strong> provide them with your
                  password or Library PIN. You are liable for any charges made to
                  your student account and an allegation of misconduct may be made
                  if the University of Newcastle or any other person becomes aware
                  that you are sharing your Student Identification card.
                </p>
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
};

const Trigger1 = () => (
  <div class="collapsibleDiv">What is a student ID Card?</div>
);
const Trigger2 = () => (
  <div class="collapsibleDiv">Why do I need an ID Card?</div>
);
const Trigger3 = () => (
  <div class="collapsibleDiv">Applying for your ID Card</div>
);
const Trigger4 = () => <div class="collapsibleDiv">What you will need</div>;
const Trigger5 = () => (
  <div class="collapsibleDiv">Where to collect your ID</div>
);
const Trigger6 = () => (
  <div class="collapsibleDiv">Required identification</div>
);
const Trigger7 = () => (
  <div class="collapsibleDiv">Under 18 identification</div>
);
const Trigger8 = () => <div class="collapsibleDiv">Lost Card</div>;
const Trigger9 = () => <div class="collapsibleDiv">Travel consession</div>;
const Trigger10 = () => (
  <div class="collapsibleDiv">Keep your ID Card handy</div>
);
const Trigger11 = () => (
  <div class="collapsibleDiv">Keep your ID Card safe</div>
);
const Trigger12 = () => <div class="collapsibleDiv">Do's and Dont's</div>;

export default StudentIDPage;
