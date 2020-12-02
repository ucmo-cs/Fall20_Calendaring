import React, {useState} from "react";
import Calendar from 'react-calendar';
import {Button, Modal} from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';

function Home() {
  //Modal functions
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //the date state (date of selected day) is what we'll use for queries and anything else
  const [date, setDate] = useState(new Date());
  const onChange = date => setDate(date);

  return(
    <div className="home">
      <div class="container">
        <div class="row-align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>Placeholder body paragraph</p>
          </div>
          <div class="col-lg-7">
          
          <div>
            <Calendar 
              onChange={onChange}
              value={date}
              showWeekNumbers //maybe remove this, shows what number week out of the year on the left
              selectRange = {false} //enable true to select two dates as a range
              calendarType = "US"
              view = "month"
            />
            <p>↓↓↓ This date shows the format we have to work with ↓↓↓</p>
            {date.toLocaleDateString()}
          </div>
          
          </div>

          <Button variant="primary" onClick={handleShow}>
            Add Task/Event
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Task/Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
          
              <form>
                <label for="itemName">Task/Event Name</label><br/>
                <input type="text" id="name" name="name"/><br/>
                <label for="description">Description</label><br/>
                <textarea id="description" name="description"/><br/>
                <label for="priority">Priority</label><br/>
                <select id="priority" name="priority">
                  <option value="grapefruit">Urgent</option>
                  <option value="lime">Normal</option>
                  <option value="coconut">Non-Critical</option>
                  <option value="mango">Low-Priority</option>
                </select><br/><br/>
                <input type="submit" value="Add Task/Event"/>
              </form>
          
            </Modal.Body>
          </Modal>

        </div>
      </div>
    </div>
  );
}

export default Home;