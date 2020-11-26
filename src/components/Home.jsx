import React from "react";

function Home() {
  return(
    <div className="home">
      <div class="container">
        <div class="row-align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>Placeholder body paragraph</p>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">New Task/Event</h1>
            <p>Enter your new task or event into calendar</p>
            <label htmlForm="tname">Task Name</label>
            <input type="text" name="tname" placeholder="Task Exc"/>
          </div>
          <div class="col-lg-5">
          <label htmlForm="tdescript">Task Descriptioon</label>
            <textarea>
              Hello there, this is some text in a text area
            </textarea>
          </div>
          <div>
            <label>Select task priority:
              <select>
                <option value="grapefruit">Urgent</option>
                <option value="lime">Normal</option>
                <option value="coconut">Non-Critical</option>
                <option value="mango">Low-Priority</option>
              </select>
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;