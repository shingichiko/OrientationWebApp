import React from "react";
import Collapsible from "react-collapsible";
import "../App.css";

function TestimonialsPage() {
  return (
    <div className="col-9">
      <div className="card">
        <div className="bodyF">
          <h1>Testimonials</h1>
          <div class="collapsibleDivMain">
            <p>
              <br></br>
              <strong>
                Below are a few testimonials from previous 1st year students
              </strong>
              <br></br>
            </p>

            <Collapsible trigger={<Trigger1 />}>
              <div class="collapsibleDiv">
                <p class="pText">
                  I enrolled into a bachelor of mechatronics engineering (honours)
                  degree back in 2017.
                </p>
                <p class="pText">
                  As a someone who enrolled into UON straight out of highschool, I
                  found fitting in quite difficult. With only a handful of friends
                  attending the same University as me, I felt quite isolated,
                  members of the UON community made belonging a little easier
                  however I wish there were easier ways to help with adjusting to
                  this new envrionment.<br></br>
                  Although over the last few years I discovered there was more than
                  enough assistance for new students, I didnt know how to locate
                  this information earlier. If only there was somewhere I could have
                  gone to locate all of the little tips and tricks to adjust to the
                  university lifestyle, that was easy to locate and navigate that
                  went straight to the point and wasnt overly boring to read.
                </p>
              </div>
            </Collapsible>
            <br></br>
            <Collapsible trigger={<Trigger2 />}>
              <div class="collapsibleDiv">
                <p class="pText">
                  Back in in 2017 I enrolled in Information Technology (Bachelor)
                  - Majoring in Digital Media and Entertainment.
                </p>
                <p class="pText">
                  Enrolling into UoN straight out of highschool struck fear as the
                  starting date neared. As I was having to organise my timetable,
                  understand the UoN website/s, learning outcomes and finding out
                  where all my classes were. Fortunately for me getting my Student
                  Card wasn’t a hard task, I was lucky enough to have had friends
                  who were already at UoN and showed me around. Attending O-week was
                  greatly utilised, scouting classes, the eating areas, meeting new
                  people and the array of welcoming activities was great.<br></br>
                  <br></br>
                  Conveniently for me, I found a place off-campus only 7 minutes’
                  walk away from the center of campus, making my commutes to classes
                  not too much of a hassle (where some would use other means of
                  transport, i.e. car or bus, and or those who are living on
                  campus).<br></br>
                  <br></br>
                  With the UoN website, I struggled to navigate through each webpage
                  (e.g. myhub, myuon and blackboard) and finding the maps on these
                  webpages were essentially non-existent, where I used a 3rd party
                  app to walk around campus for my classes. Even with these apps or
                  webpages to show students where to go or what room is their class,
                  I found that the rooms/building were still hard to find and or
                  walkthrough, having multiple entrances (which was convenient, for
                  those who know the building layout).<br></br>
                  <br></br>
                  During my 1st week of Uni, I thoroughly enjoyed the way each class
                  slowly worked into the learning outcomes, this made learning and
                  preparing easy. Finding the right textbooks and reading materials
                  helped with enhanced learning, but buying new books isn’t the best
                  investment as the textbooks are quite expensive and could be
                  without. Using the libraries and other available space to study on
                  campus helped with being able to utilise my time on tasks and
                  remotely further improve on certain tasks that I couldn’t do at home.
                </p>
              </div>
            </Collapsible>
            {/* <br></br>
            <Collapsible trigger={<Trigger3 />}>
              <div class="collapsibleDiv">
                <p class="pText"></p>
              </div>
            </Collapsible> */}
          </div>
        </div>
      </div>
    </div>
  );
}

/* These are the triggers that set a name to the div and allow the div to be styled and clickable */
const Trigger1 = () => (
  <div class="collapsibleDiv">Testimonial from a Mechatronics Student</div>
);
const Trigger2 = () => (
  <div class="collapsibleDiv">Testimonial from a Information Technology Student</div>
);
// const Trigger3 = () => (
//   <div class="collapsibleDiv">Testimonial from 'Test Student 3'</div>
// );

export default TestimonialsPage;
