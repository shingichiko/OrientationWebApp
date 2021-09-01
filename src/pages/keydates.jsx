import React from "react";
import Collapsible from "react-collapsible";
import Sidebar from "../components/features/Sidebar";

const KeyDatesPage = () => {
  return (
    <div className="row">
      <div className="col-9">
        <div className="card">
          <h1>KEY DATES</h1>
          <p>
            Here are the important academic related dates to look out for during your first semester.
            There are key terms at the end of the page to help you understand more about the events mentioned.
      <br />
            <br />
      It is important to take note of Enrolment dates in this section as they are part of standard academic calendar.
      During the term these dates are labeled:
      <ul>
              <li>Semester Commencement Dates</li>
              <li>Census Date</li>
              <li>Deadline days to withdraw courses with or without a certain penalty</li>
              <li>Semester Recess Dates</li>
              <li>Formal Examination dates.</li>
            </ul>
          </p>
          <Collapsible trigger={<Trigger1 />}>
            <div class="collapsibleDiv">
              {" "}
              {/* Collapsible table for January key dates differentiated with colour backgrounds from css classes */}
              <table className="datesTable" width="100%">
                <tr className="darkRow">
                  <td rowSpan="2">11th</td>
                  <td className="bold">
                    {" "}
                Summer Term 2 – Commences.<br></br>{" "}
                    <i className="normal">
                      Last day to add a course through MyHub without approval
                </i>
                  </td>
                </tr>
                <tr className="darkRow">
                  <td className="bold">
                    Summer Term 1 - Census date.<br></br>{" "}
                    <i className="normal">
                      Last day to withdraw or drop a course without financial penalty
                </i>
                  </td>
                </tr>

                <tr className="lightRow">
                  <td>13th - 19th</td>
                  <td className="bold">Special exam period</td>
                </tr>
                <tr className="darkRow">
                  <td>22nd</td>
                  <td className="bold">
                    Summer Term 2 - Census date.<br></br>{" "}
                    <i className="normal">
                      {" "}
                  Last day to withdraw or drop a course without financial penalty
                </i>
                  </td>
                </tr>

                <tr className="lightRow">
                  <td>25th</td>
                  <td className="bold">Trimester 1 – Commences</td>
                </tr>
              </table>
            </div>
          </Collapsible>

          <hr></hr>
          {/* Collapsible section for february dates*/}
          <Collapsible trigger={<Trigger2 />}>
            <div class="collapsibleDiv">
              <table className="datesTable" width="100%">
                <tr className="darkRow">
                  <td>5th</td>
                  <td className="bold">
                    Trimester 1 - Last day to add a course through myHub without
                    approval.
              </td>
                </tr>

                <tr className="lightRow">
                  <td>8th-12th</td>
                  <td className="bold">Summer Term 1 & 2 Examinations</td>
                </tr>

                <tr className="darkRow">
                  <td rowSpan="2">19th</td>
                  <td className="bold">Summer Term 1 & 2 Results Released</td>
                </tr>
                <tr className="darkRow">
                  <td className="bold">
                    Trimester 1 - Census Date.<br></br>{" "}
                    <i className="normal">
                      Last Dat to withdraw or drop a course without financial penalty.
                </i>{" "}
                  </td>
                </tr>

                <tr className="lightRow">
                  <td>22nd</td>
                  <td className="bold">Semester 1 Commemnces.</td>
                </tr>
              </table>
            </div>
          </Collapsible>

          <hr></hr>
          {/* Collapsible section for March Table*/}
          <Collapsible trigger={<Trigger3 />}>
            <div class="collapsibleDiv">
              <table className="datesTable" width="100%">
                <tr className="lightRow">
                  <td>5th</td>
                  <td className="bold">
                    Semester 1 - Last day to ass a course through{" "}
                    <a href="https://myhub.newcastle.edu.au/psp/CS92PRD/?cmd=login">
                      myHub
                </a>{" "}
                without approval.
              </td>
                </tr>

                <tr className="darkRow">
                  <td>19th</td>
                  <td className="bold">Semester 1 - Census date</td>
                </tr>
              </table>
            </div>
          </Collapsible>

          <hr></hr>
          {/* Collapsible section for April Table*/}
          <Collapsible trigger={<Trigger4 />}>
            <div class="collapsibleDiv">
              <table className="datesTable" width="100%">
                <tr className="lightRow">
                  <td>2nd</td>
                  <td className="bold">
                    Semetser 1 - Recess.<br></br>{" "}
                    <i className="normal">April 2nd - April 16th</i>
                  </td>
                </tr>

                <tr className="darkRow">
                  <td>16th</td>
                  <td className="bold">Trimester 1 - Concludes</td>
                </tr>

                <tr className="lightRow">
                  <td rowSpan="2">19th</td>
                  <td className="bold">Semester 1 - Resumes.</td>
                </tr>
                <tr className="lightRow">
                  <td className="bold">
                    Trimester 1 - Examinations.<br></br>{" "}
                    <i className="normal">April 19th - April 23rd</i>
                  </td>
                </tr>
              </table>
            </div>
          </Collapsible>

          <hr></hr>
          {/* Collapsible for May Table*/}
          <Collapsible trigger={<Trigger5 />}>
            <div class="collapsibleDiv">
              <table className="datesTable" width="100%">
                <tr className="lightRow">
                  <td>7th</td>
                  <td className="bold">
                    Trimester 1 - Results released.<br></br>{" "}
                    <i className="normal">Fully graded date</i>
                  </td>
                </tr>

                <tr className="darkRow">
                  <td>10th</td>
                  <td className="bold">Trimester 2 Commences</td>
                </tr>

                <tr className="lightRow">
                  <td>21st</td>
                  <td className="bold">
                    Trimester 2 - Last day to ass a course through{" "}
                    <a href="https://myhub.newcastle.edu.au/psp/CS92PRD/?cmd=login">
                      myHub
                </a>{" "}
                without approval.
              </td>
                </tr>
              </table>
            </div>
          </Collapsible>

          <hr></hr>
          {/* collapsible section for June Table*/}
          <Collapsible trigger={<Trigger6 />}>
            <div class="collapsibleDiv">
              <table className="datesTable" width="100%">
                <tr className="lightRow">
                  <td rowSpan="2">4th</td>
                  <td className="bold">
                    Semester 1 - Concludes.<br></br>{" "}
                    <i className="normal">
                      Last day to drop a course without academic penalty
                </i>
                  </td>
                </tr>
                <tr className="lightRow">
                  <td className="bold">
                    Trimester 2 sensus date. <br></br>
                    <i className="normal">
                      Last day to drop a course without academic penalty
                </i>
                  </td>
                </tr>

                <tr className="darkRow">
                  <td>7th</td>
                  <td className="bold">
                    Semester 1 - Formal Examinations.<br></br>{" "}
                    <i className="normal">
                      June 7th - June 19th (Undergraduate and Postgraduate)
                </i>
                  </td>
                </tr>

                <tr className="lightRow">
                  <td>14th</td>
                  <td className="bold">
                    Winter Term - Commences.<br></br>{" "}
                    <i className="normal">
                      Last day to ass a course through myHub without approval
                </i>
                  </td>
                </tr>

                <tr className="darkRow">
                  <td>25th</td>
                  <td className="bold">
                    Winter Term - Census Date.<br></br>
                    <i className="normal">
                      Last day to withdraw or drop a course without financial penalty
                </i>
                  </td>
                </tr>

                <tr className="lightRow">
                  <td>30th</td>
                  <td className="bold">HDR Semester 1 Concludes</td>
                </tr>
              </table>
            </div>
          </Collapsible>
          </div>
          
          <div className="card">
            <article>
              <h1>Events</h1>
              <article className="card">
                <img src="./x_ppic.jpg" alt="festX" height="300" width="400"/>
                <h3>Festival X</h3>
                <h6>12 June-15 June 2021</h6>
                <p>Walk through the Festival X Virtual Gallery, an interactive platform that has been developed
                by two of our talented students, and will display over 100 #covidcreations from Visual Communication Design,
              Natural History Illustration and Creative Industries students. The gallery is open all weekend.</p>
                <p>More Info at the <a href="https://www.newcastle.edu.au/events/faculty-of-education-and-arts/festival-x">Festival X</a> page.</p>
              </article>
              <article className="card">
                <img src="./pridephoto.jpg" alt="pride" height="300" width="400"/>
                <h3>PRIDE</h3>
                <h6>10 October-30 October 2021</h6>
                <p>The University of Newcastle has an inclusive community that advocates for our LGBTIQA+ members.
                Our annual PRIDE celebration is your chance to get informed about, have fun with,
              celebrate, advocate for, unite with and promote the LGBTIQA+ community.</p>
                <p>More info at the <a href="https://www.newcastle.edu.au/events/current-students/pride">PRIDE</a> page.</p>
              </article>
              <article className="card">
                <img src="./grandchal.jpg" alt="grandchal" height="300" width="400"/>
                <h3>Grand Challenge</h3>
                <h6>22 February-31 May 2021</h6>
                <p>The University of Newcastle’s Grand Challenge is an annual initiative with the aim of encouraging multi-disciplinary
                teams to propose and develop potential solutions to a complex challenge. The most compelling submissions will
              share in $50,000 in funds to advance their idea.</p>
                <p>More info at the <a href="https://www.newcastle.edu.au/grand-challenge">Grand Challenge UON</a> page.</p>
              </article>
              <article className="card">
                <img src="./drivein.jpg" alt="drive-in" height="300" width="400" />
                <h3>Drive-In Movies</h3>
                <h6>22 February-31 May 2021</h6>
                <p>Drive in Movies are hosted by University of Newcastle Students (formerly Student Central)
                for some rest and relaxation for students. The movies are usually screened at 6pm at the Callaghan Campus.
              This is a student only event and requires car space to be pre-booked.<br />
                  <strong>Dates will be provided on the <a href="https://www.facebook.com/uninewcastlestudents">University of Newcastle Students </a>page throughout the semester.</strong>
                </p>
              </article>
            </article>
          </div>

          {/*
       *
       *
       *
       *
       */}
          <hr></hr>
          <div className="card">
            <h2>Terms</h2>
            <p>
              Incase some of the terms in the key dates are foreign to you, here are basic explanations of what they mean
        to make it understandable:<br />
            </p>
            <p>
              <strong>Census Date </strong>- The last day to drop a course without facing any financial
        penalty. This date is usually at the end of week 4 of the semester or
        trimester.
      </p>
            <p>
              <strong>Winter Term </strong>- The school term within the Winter period, usually just at
        the end of the Semester 1 of the year.
      </p>
            <p>
              <strong>Summer Term </strong>- The school term within the Australian summer period,
        usually at the end of the year.
      </p>
            <p><strong>Special Exam Period </strong>- Exam period for supplementary exams.</p>
            <p>
              <strong>myHub </strong>- This is where you will enrol in your courses, update your
        personal details, pay fees and view your financial records, timetable,
        academic transcript and any scholarships you may have. You can also
        check your weekly schedule here.
      </p>
          </div>
        </div>
        <Sidebar />
      </div>
      
  );
};

/* These are the triggers that set a name to the div and allow the div to be styled and clickable */
const Trigger1 = () => (
  <div class="collapsibleDiv">January 2021</div>
);
const Trigger2 = () => (
  <div class="collapsibleDiv">February 2021</div>
);
const Trigger3 = () => (
  <div class="collapsibleDiv">March 2021</div>
);
const Trigger4 = () => (
  <div class="collapsibleDiv">April 2021</div>
);
const Trigger5 = () => (
  <div class="collapsibleDiv">May 2021</div>
);
const Trigger6 = () => (
  <div class="collapsibleDiv">June 2021</div>
);
export default KeyDatesPage;
