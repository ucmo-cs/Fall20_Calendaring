import React, {useState} from "react";
import Calendar from './Calendar';
import {Button, Form, Modal} from 'react-bootstrap';

function Home() {
  //Modal functions
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="home">
      <div class="container">
        <div class="row-align-items-center my-5">
          <div class="col-lg-7">
            <Calendar />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>Placeholder body paragraph</p>
          </div>
  
          <Button variant="primary" onClick={handleShow}>
            Add Task
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
          
              <Form>
                Form goes here
              </Form>
          
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
            </Modal.Footer>
          </Modal>

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