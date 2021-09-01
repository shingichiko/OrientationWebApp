import React, { Component } from "react";
import "./App.css";
import Collapsible from "react-collapsible";

class UniAccounts extends Component {
  render() {
    return (
      <div className="bodyF">
        <h1>Setting up a University Account</h1>
        <p>
          Below is a walkthrough to help you set-up your UoN accounts and
          Information on software and tools
        </p>
        <section>
          <h3>Setting up your account</h3>
          <p>
            This account acts as the base for all University digital offerings
            and your personal information. Here you can find transcripts, exam
            dates and other important information.
            <br></br>A valid student ID (provided by the University) and your
            personal password allows access into myHub.
          </p>
          <p>
            The steps in setting up your account are as follows:
            <ol>
              <li>
                Log in to{" "}
                <a href="https://myhub.newcastle.edu.au/psp/CS92PRD/?cmd=login">
                  myHub
                </a>{" "}
                using your application number (found on your offer letter) and
                date of birth (day and month only). Click on 'Student Login
                Details' and your student number and program code will be
                displayed which will be required in the next step.
              </li>
              <li>
                To activate your account, open the link{" "}
                <a href="https://accountactivation.newcastle.edu.au/sa">here</a>{" "}
                and enter your student number, date of birth and the program
                code from step one. Complete the Captcha test and click Next.
              </li>
              <li>
                An important part before proceeding to the final step is to read
                and understand the terms and conditions, and then accepting
                them.
              </li>
              <li>
                Lastly, the next page will require you to enter and re-enter a
                new password and save the details. The Account Activation
                Complete page will be displayed, meaning your account in now
                active and ready for use.
              </li>
            </ol>
          </p>
        </section>

        <section>
          <h3>Blackboard</h3>
          <p>
            After setting up your University account, you are now able to access
            Blackboard. To do this, Log into{" "}
            <a href="https://myuon.newcastle.edu.au/campusm/home#select-profile">
              myUON
            </a>{" "}
            with your Student number and new password. Proceed to click the
            UONline title.
          </p>
        </section>

        <section>
          <h3>Software and Tools</h3>
          <p>
            During the course of your Program with the University, you will be
            provided with access to a number of software to assist with your
            studies.
          </p>
          <Collapsible trigger="Microsoft Office">
            <p>
              The Microsoft Student Advantage Scheme enables you access to
              digita downloads of MS Office 365 on up to 5 PCs and 5 mobile
              devices, including Windows, Mac OS X, iOS and Android.
            </p>
          </Collapsible>

          <Collapsible trigger="OneDrive">
            <p>
              There is also free access to{" "}
              <strong>1 TB of cloud storage</strong> via Microsoft OneDrive
            </p>
          </Collapsible>

          <Collapsible trigger="Zoom">
            <p>
              Zoom is the University's video and Audio online conferencing
              solution - providing you with your own personal video conferencing
              space.{" "}
            </p>
          </Collapsible>

          <Collapsible trigger="Microsoft Teams">
            <p>
              Microsoft Teams is a group project platform that brings together
              file storage, chat, notebooks and task management in one
              convenient location. This is a great tool to use for group
              assignments and can be used for free using your student account.{" "}
            </p>
          </Collapsible>
        </section>
      </div>
    );
  }
}

export default UniAccounts;
