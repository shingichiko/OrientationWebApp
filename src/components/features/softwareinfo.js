import React from "react";

function softwareinfo() {
  return (
    <div>
        {/*
        Information on software tools and student systems offered
        Picture illustrations for some,
        and links directig to systems. 
       */}
      <div className="card">
      <h1>Software and Tools</h1>
                <p>
                    During the course of your Program with the University, you will be
                    provided with access to a number of software to assist with your
                    studies. 
                </p>

        <article className="card">
            <h3>Microsoft</h3>
            <p>The Microsoft Student Advantage Scheme enables you access to
                digital downloads of MS Office 365 on up to 5 PCs and 5 mobile
                devices, including Windows, Mac OS X, iOS and Android.
                The University IT Services offer download instructions for 
                <a href="https://uonau.service-now.com/itservices?id=kb_article_view&sysparm_article=KB0025877&sys_kb_id=22d7febcdb715c5062a91c0e04961994">Windows</a>, 
                <a href="https://uonau.service-now.com/itservices?id=kb_article_view&sysparm_article=KB0021556&sys_kb_id=7612b46b1b842450107a55b81d4bcb4f">Mac OS X</a>, 
                and <a href="https://uonau.service-now.com/itservices?id=kb_article_view&sysparm_article=KB0025880&sys_kb_id=3469cbd3db3950d0ad298a264a961924">Mobile</a>.
            </p>
        </article>

        <article className="card">
            <h3>Zoom</h3>
            <p>
                Zoom is the University's video and Audio online conferencing
                solution - providing you with your own personal video conferencing space.
                You can sign in and use your University Account for Zoom.<br/>
                To sign in and use Zoom, 
                <ol>
                    <li>
                        Download the Zoom app for Windows, Mac OS X or Mobile <a href="https://zoom.us/download">here.</a>
                    </li>
                    <li>
                        Open the app and it will display the image below. Click the 'Sign In' option.<br/>
                        <img src="./zoom1.png" alt="zoom-step-1" height="300"/>
                    </li>
                    <br/>
                    <li>
                        This will take you to the 'Sign in' page. Here, click the 'Sign in with SSO' option
                         as you will be signing in with your Uni account.<br/>
                        <img src="./zoom2.png" alt="zoom-step-2" height="300"/>
                    </li>
                    <br/>
                    <li>
                        Next step is to enter the company domain for the University, which is displayed below.<br/>
                        <img src="./zoom3.png" alt="zoom-step-3" height="300"/><br/>
                        After clicking continue, you will be redirected to UON sign in page where you will enter your 
                        student ID and password/Uni account credentials.
                        From there you will be redirected to the Zoom homepage of your account.
                    </li>
                </ol>
            </p>
            
        </article>

        <article className="card">
            <h3>OneDrive</h3>
            <p>
                There is also free access to <strong>1 TB of cloud storage</strong> via Microsoft OneDrive. 
                This gives you space to back-up your uni work, as well as to store documents, photos, and other files, 
                share them with friends, and even collaborate on content. You're free to decide how you want to use it and 
                can access OneDrive anywhere, anytime.<br/>
                More Information <a href="https://uonau.service-now.com/itservices?id=kb_article_view&sysparm_article=KB0023661&sys_kb_id=50b85677dbe9d05062a91c0e04961969">here</a>. 
            </p>
            
        </article>

        <article className="card">
            <h3>Microsoft Teams</h3>
            <p>
                Microsoft Teams is a group project platform that brings together
                file storage, chat, notebooks and task management in one
                convenient location. This is a great tool to use for group
                assignments and can be used for free using your student account.
            </p>
            
        </article>
      </div>

    {/* 
        Information and illustrations on connecting to internet on campus
        Code just contains basic info and picture illustrations
    */}
      <div className="card">
          <h1>Internet on Campus</h1>
          <p>As a student you have access to University internet services via wireless networks around campus,
               via a cable or any of the computers at the University (Library or Lab rooms).
          </p>
          <p>
              To connect to the wireless network on campus, find the wifi-network with the ID 'newcastle.edu.au'.<br/>
              <img src="./wificonnect.png" alt="wifissid" height="300"/>
          </p>
          <p>
              <strong>NOTE:</strong> If you bring your own computer on campus and connect to the University's wired network, 
              access to the Internet may not be possible until you manually configure your computer settings.
          </p>
      </div>

      {/* 
        Information on student systems
        Links redirect to main university system log in pages. 
    */}

      <div className="card">
          <h1>Student Systems</h1>
          <p>
              Your student ID allows you to access a number of systems mainly for students for your academics
              and University records. These can be accessed on your mobile device, laptop or computer, or
              on any student computer in the Library, any Lab or Student Hubs.<br/>
              Here is a list of some of the systems:
              <ul>
                  <li>
                      <a href="https://uonline.newcastle.edu.au/">UONline</a> - our virtual learning environment, also known as Blackboard. Here you can find
                      your courses, see your grades, University modules and much more.
                  </li>
                  <li>
                      <a href="https://myhub.newcastle.edu.au/">myHub</a> - the hub for all University records from transcripts, finances, enrolments and personal information. 
                      Here you can also update personal records. 
                  </li>
                  <li>
                      <a href="https://myuon.newcastle.edu.au/">myUON</a> - student portal, available on desktop and as a mobile app. Timetables, weekly events and much more.
                  </li>
                  <li>
                      <a href="https://myprintcopy.newcastle.edu.au/">myPrintCopy</a> - used to check balance of your printing account and topping up.
                  </li>
                  <li>
                      <a href="https://login.microsoftonline.com/">NUmail</a> - your student email with either the name you provided to the Uni or student ID.
                  </li>
                  <li>
                      <a href="https://www.newcastle.edu.au/library">NEWCAT+</a> - Library Catalogue.
                  </li>
                  <li>
                      <a href="https://uonau.service-now.com/itservices">ServiceUON</a> - IT support and knowledge base.
                  </li>
              </ul>
          </p>

      </div>
    </div>
  );
}

export default softwareinfo;