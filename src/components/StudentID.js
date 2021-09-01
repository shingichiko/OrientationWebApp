import React from 'react';
import ReactDom from 'react-dom';
import Collapsible from 'react-collapsible';

const studentID = (
    <div className="bodyF">
              <h1>How to get your student ID</h1>
              <p>This will guide you through getting your student ID</p>
              <Collapsible trigger="Where to collect your ID">
                  <p>Your ID will be available for pickup at one of the student centers"</p>
              </Collapsible>
          </div>
);

ReactDom.render(studentID, document.getElementById('studentIDdiv'));