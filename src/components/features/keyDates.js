import React, { Component } from "react";
import "./App.css";
import Collapsible from "react-collapsible";

class keyDates extends Component {
  render() {
    return (
      <div className="bodyF">
        <h1>KEY DATES</h1>
        <p>
          Here are the important academic related dates to look out for during
          your first semester. There are key terms at the end of the page to
          help you understand more about the events mentioned.
        </p>
        <Collapsible trigger="January 2021">
          {" "}
          {/* Div table for January key dates differentiated with colour backgrounds from css classes */}
          <table className="datesTable" width="60%">
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
                  Last day to withdraw or drop a course without financial
                  penalty
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
                  Last day to withdraw or drop a course without financial
                  penalty
                </i>
              </td>
            </tr>

            <tr className="lightRow">
              <td>25th</td>
              <td className="bold">Trimester 1 – Commences</td>
            </tr>
          </table>
        </Collapsible>

        <hr></hr>
        {/* Div element with february key dates*/}
        <Collapsible trigger="February 2021">
          <table className="datesTable" width="60%">
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
                  Last Dat to withdraw or drop a course without financial
                  penalty.
                </i>{" "}
              </td>
            </tr>

            <tr className="lightRow">
              <td>22nd</td>
              <td className="bold">Semester 1 Commemnces.</td>
            </tr>
          </table>
        </Collapsible>

        <hr></hr>
        {/* Div elements for March Table*/}
        <Collapsible trigger="March 2021">
          <table className="datesTable" width="60%">
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
        </Collapsible>

        <hr></hr>
        {/* Div elements for April Table*/}
        <Collapsible trigger="April 2021">
          <table className="datesTable" width="60%">
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
        </Collapsible>

        <hr></hr>
        {/* Div elements for May Table*/}
        <Collapsible trigger="May 2021">
          <table className="datesTable" width="60%">
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
        </Collapsible>

        <hr></hr>
        {/* Div elements for June Table*/}
        <Collapsible trigger="June 2021">
          <table className="datesTable" width="60%">
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
                  Last day to withdraw or drop a course without financial
                  penalty
                </i>
              </td>
            </tr>

            <tr className="lightRow">
              <td>30th</td>
              <td className="bold">HDR Semester 1 Concludes</td>
            </tr>
          </table>
        </Collapsible>

        {/*
         *
         *
         *
         *
         */}
        <hr></hr>
        <h4>Terms</h4>
        <p>
          Census Date - The last day to drop a course without facing any
          financial penalty. This date is usually at the end of week 4 of the
          semester or trimester.
        </p>
        <p>
          Winter Term - The school term within the Winter period, usually just
          at the end of the Semester 1 of the year.
        </p>
        <p>
          Summer Term - The school term within the Australian summer period,
          usually at the end of the year.
        </p>
        <p>Special Exam Period - Exam period for supplementary exams.</p>
        <p>
          myHub - This is where you will enrol in your courses, update your
          personal details, pay fees and view your financial records, timetable,
          academic transcript and any scholarships you may have. You can also
          check your weekly schedule here.
        </p>
      </div>
    );
  }
}

export default keyDates;
