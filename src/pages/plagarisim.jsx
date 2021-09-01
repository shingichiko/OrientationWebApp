import React from "react";
import Collapsible from "react-collapsible";

const PlagarisimPage = () => {
  return (
    <div className="row">
      <div className="col-9">
        <div className="card">
        <h1>Plagiarism</h1>
        <p>
          We've all heard about it but what is it? And how do you avoid it. This
          is a short crash course which will answer all those questions and guide
          you through student Academic Integrity.
        </p>
        <Collapsible trigger={<Trigger1 />}>
          <div class="collapsibleDiv">
            <p class="pText">
              The University defines plagiarism as "presenting the words or ideas of
              someone else as your own without giving credit to the origina author"
            </p>
            <p class="pText">
              All the above examples in the definition are punishable offenses as
              per University Conduct and Academic Integrity policies.
            </p>
          </div>
        </Collapsible><br></br>
        <Collapsible trigger={<Trigger2 />}>
          <div class="collapsibleDiv">
            <p class="pText">
              Plagiarims includes submitting an assessment task completed in
              previous studies by another student, submitting other people's work in
              part or full or using other people's research data or findings without
              acknowledging them.
            </p>
            <p class="pText">
              In many cases students tend to use previous assessments to either help
              them with current assessments that may be similar to the previous one.
              This is a common form of plagiarism for first year students.
            </p>
          </div>
        </Collapsible><br></br>
        <Collapsible trigger={<Trigger3 />}>
          <div class="collapsibleDiv">
            <p class="pText">
              Failing to abide by the Student Conduct and Academic Integrity
              policies of the University has concequences.
            </p>
            <p class="pText">
              Students under investigation for student academic misconduct, research
              misconduct or other breaches of discipline will not be eligible to
              graduate until the matter is resolved unter the provisions of the
              Student Conduct Rule.
            </p>
            <p class="pText">
              Penalties for academic misconduct has the following Penalties:
              <ul>
                <li>counsel, reprimand, caution or warn the student;</li>
                <li>require the student to undertake counselling or training;</li>
                <li>require the student to re-attempt the assessment item;</li>
                <li>
                  require the student to re-attempt the assessment with a capped
                  mark;
                </li>
                <li>
                  exclude any parts of the assessment item, and refer the revised
                  assessment item to be marked according to the work completed.
                </li>
                <li>award no marks to the student for the assessment item</li>
              </ul>
            </p>
            <p class="pText">
              More on{" "}
              <a href="https://policies.newcastle.edu.au/document/view-current.php?id=34">
                Student Conduct Rule
              </a>{" "}
              and{" "}
              <a href="https://policies.newcastle.edu.au/document/view-current.php?id=35">
                Student Academic Integrity Policy.
              </a>
            </p>
          </div>
        </Collapsible><br></br>
          <p>
            Referencing can be very tricky especially if you do not know the
            different styles.<br></br>
            There are many different styles of referencing but the 2 common ones
            used at The University of Newcastle are Havard or APA 6th Edition.
            There are many different websites that help with referencing correctly
            and there are ones that will do the references for you if you put the
            details of the source.
          </p>
          <p>
            A guide to referencing and citing is found{" "}
            <a href="https://libguides.newcastle.edu.au/referencing">here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

/* These are the triggers that set a name to the div and allow the div to be styled and clickable */
const Trigger1 = () => (
  <div class="collapsibleDiv">What is it?</div>
);
const Trigger2 = () => (
  <div class="collapsibleDiv">Examples</div>
);
const Trigger3 = () => (
  <div class="collapsibleDiv">Penalties</div>
);

export default PlagarisimPage;
