import React from "react";
import Sidebar from "../components/features/Sidebar";

const MainPage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <div className="card">
            <h1>Welcome!</h1>
            <h5>To EzO's Home page</h5>
            <hr></hr>
            <h3>The University of Newcastle Experience</h3>
            <video width="685"  controls>
              <source src="./UoN Experience.mp4" type="video/mp4" />
              Browser not supported.
            </video>
            {/* This video added is an unlised youtube video on the UoN website "Stuff you should watch" */}
            <hr></hr>
            <h5>First Week Introduction - info you should know:</h5>
            <p>
              Hey, are you ready for your 1st week of University? If not, this
              website will guide you through what the Uni life has to offer,
              from learning the campus layout to an enhanced understanding of
              the website.
            </p>
            <p>
              This website is jam packed full of information to help you trough
              your first week at Newcastle University, no matter your degree
              i.e. NewStart, Information Tech, Medicine, commerce, etc.
            </p>
            <p>
              During your first week here at Newcastle Uni, 1st year students
              will be welcomed with open arms and encouraged to explore the
              campus.
            </p>
            <p>
              Throughout the year there are events that take place around the
              Uni, a good one to keep an eye out for is the UON Sausage Watch
              where you can score yourself a free sausage sizzle and meet new
              people.
            </p>
            <p>
              A glorified version of these kinds of events are showcased during
              the Orientation Week, which we encourage you go to for a great
              time. More information on O Week throughout the website.
            </p>
            <p>
              Additionally, students can learn a lot from the O Week, utilising
              this time to look around campus and obtaining their Student ID
              Cards.
            </p>
            <p>
              These cards can be found at the Students Services Building,
              allowing students to have access to certain buildings/rooms where
              allocated i.e. an IT student having access to the Engineering
              computer rooms.
            </p>
            <p>
              The Student Services Building also has a wide variety of help
              desks for any questions you may have, like asking about a course’s
              financial penalty census date. More information in the 'Student
              Card' tab.
            </p>
            <p>
              There are other buildings around campus like the libraries, food
              courts and chaplaincy where students can meet new people, discuss
              topics, and get advice.
            </p>
            <p>
              For quick contacts, our web service provides email and phone
              contacts for; all over campus, security, general questions, tech
              support, course coordinators, and many more. As well as external
              links to other UoN resourses.
            </p>
            <p>
              About the web app and website, this website is set in place to help
              out any and all first-year students with their first week of Uni.{" "}
            </p>
            <p>
              Which can further improve productivity throughout the first year
              to those who utilise the information. The website is designed
              to be user friendly and adaptable to the users needs, providing
              students to become familiarised and organised with the Uni
              lifestyle.
            </p>
            <p>
              A checklist tab is available for the first week (and all other weeks
              for the Semester) that are readily available for students to go through,
              essentially a step by step guide for their courses and other Uni
              activities.
            </p>
            {/* <p>
              <em>
                *In the video, there will be images and text that covers all
                there is to know aboutthe campuses hot spots, the Student Card
                and where to get it from, Campuslayout, contacts across campus
                and online, events and activities for all.*
              </em>
            </p> */}
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default MainPage;
