import React from "react";
import Softwareinfo from "../components/features/softwareinfo";

const uniAccountsPage = () => {
    return (
        <div className="col-9">
            <div className="card">
            <h1>Setting up a University Account</h1>
            <br/>
            <p>
                Below is a walkthrough to help you set-up your UoN accounts and
                Information on software and tools
                </p>
            <section>
                <h3>Setting up your account</h3>
                <p>
                    This account acts as the base for all University digital offerings
                    and your personal information. Here you can find transcripts, exam
                    dates and other important information.<br></br>A valid student ID (provided by the University) and your
                    personal password allows access into myHub.
                    </p>
                <p>
                    The steps in setting up your account are as follows:
                    <ol>
                        <li>
                            Log in to{" "}
                            <a href="https://myhub.newcastle.edu.au/psp/CS92PRD/?cmd=login">myHub</a>{" "}
                            using your application number (found on your offer letter) and
                             date of birth (day and month only). Click on 'Student Login 
                             Details' and your student number and program code will be
                             displayed which will be required in the next step.<br/>
                             <video width="500"  controls>
                                 <source src="./Step1.mp4" type="video/mp4" />
                                 Browser not supported.
                             </video>
                        </li>
                        <br/>
                        <li>
                            To activate your account, open the link{" "}
                            <a href="https://accountactivation.newcastle.edu.au/sa">here</a>{" "}
                            and enter your student number, date of birth and the program
                            code from step one. Complete the Captcha test and click Next.
                            <video width="500"  controls>
                                 <source src="./Step2.mp4" type="video/mp4" />
                                 Browser not supported.
                             </video>
                        </li>
                        <br/>
                        <li>
                            An important part before proceeding to the final step is to read
                            and understand the terms and conditions, and then accepting
                            them.<br/>
                            <img src="./tnc.png" alt="termsnconditions"/>
                        </li>
                        <br/>
                        <li>
                            Lastly, the next page will require you to enter and re-enter a
                            new password and save the details. The Account Activation
                            Complete page will be displayed, meaning your account in now
                            active and ready for use.<br/>
                            <img src="./set-password.png" alt="set-password"/>
                        </li>
                    </ol>
                </p>
            </section>
            </div>
            <hr/>

            <Softwareinfo/>
        </div>

    );
}
export default uniAccountsPage;