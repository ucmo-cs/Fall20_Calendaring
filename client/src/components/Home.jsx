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
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>Placeholder body paragraph</p>
          </div>
          <div class="col-lg-7">
            <Calendar />
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