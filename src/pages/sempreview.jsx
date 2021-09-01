import React from "react";
import { createPopper } from '@popperjs/core';


const preview = () => {
  return (
    <div className="bodyF">
      <div className="card">
        <h1>Semester Preview</h1>
        <p class="mb-0">
          Getting to know your way around uni is hard enough,
          so here is some help for getting to know your schedule. This is what your semester will look like,
          go ahead and get familiar!
        </p>
        <hr />

        {/*First week table*/}
        <table class="table table-bordered">
          <thead>
            <tr>
              <th colSpan="7">
                <h2>Semester 1</h2>
                <h3>Week 1</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
          </table>
          <table class="table table-bordered">
          {/*Second week table*/}
          <thead>
            <tr>
              <th colSpan="7">
                <h3>Week 2</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
          </table>
          <table class="table table-bordered">
          {/*Third week table*/}
          <thead>
            <tr>
              <th colSpan="7">
                <h3>Week 3</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
          </table>
          <table class="table table-bordered">
          {/*Fourth week table*/}
          <thead>
            <tr>
              <th colSpan="7">
                <h3>Week 4</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
          </table>
          <table class="table table-bordered">
          {/*Fifth week table*/}
          <thead>
            <tr>
              <th colSpan="7">
                <h3>Week 5</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
          </table>
          <table class="table table-bordered">
          {/*Sixth week table*/}
          <thead>
            <tr>
              <th colSpan="7">
                <h3>Week 6</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
          </table>
          <table class="table table-bordered">
          {/*Seventh week table*/}
          <thead>
            <tr>
              <th colSpan="7">
                <h3>Week 7</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
          </table>
          <table class="table table-bordered">
          {/*Eight week table*/}
          <thead>
            <tr>
              <th colSpan="7">
                <h3>Week 8</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
          </table>
          <table class="table table-bordered">
          {/*Nineth week table*/}
          <thead>
            <tr>
              <th colSpan="7">
                <h3>Week 9</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
          </table>
          <table class="table table-bordered">
          {/*Tenth week table*/}
          <thead>
            <tr>
              <th colSpan="7">
                <h3>Week 10</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
          </table>
          <table class="table table-bordered">
          {/*Eleventh week table*/}
          <thead>
            <tr>
              <th colSpan="11">
                <h3>Week 11</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
          </table>
          <table class="table table-bordered">
          {/*Twelfth week table*/}
          <thead>
            <tr>
              <th colSpan="7">
                <h3>Week 12</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
          </table>
          <table class="table table-bordered">
          {/*Thirteenth week table*/}
          <thead>
            <tr>
              <th colSpan="7">
                <h3>Week 13</h3>
              </th>              
            </tr>
            <tr>
              <th scope="col" width="110">Monday</th>
              <th scope="col" width="110">Tuesday</th>
              <th scope="col" width="110">Wednesday</th>
              <th scope="col" width="110">Thursday</th>
              <th scope="col" width="110">Friday</th>
              <th scope="col" width="110" >Saturday</th>
              <th scope="col" width="110" >Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td id="weekend"></td>
              <td id="weekend"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default preview;
