import React from "react";

function NavMenu() {
  return (
    <div>
      <div className="img" />
      <ul className="navbar">
        <li>
          <a href="homepage">Home</a>
        </li>
        <li>
          <a href="studentid">Student Card</a>
        </li>
        <li>
          <a href="sempreview">Semester Preview</a>
        </li>
        <li>
          <a href="checklist">Checklist</a>
        </li> 
        <li>
          <a href="keydates">Key Dates</a>
        </li>
        <li>
          <a href="uniAccounts">Uni Account & IT essentials</a>
        </li>
        <li>
          <a href="map">Map</a>
        </li>
        <li>
          <a href="directory">Directory</a>
        </li>
        <li>
          <a href="testimonials">Testimonials</a>
        </li>
        <li>
          <a href="plagarism">Plagarism</a>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
