import React, { Component } from 'react';

//Require userID sent from previous component
class ShareCalendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: props.userID
        }
    }
    calendar = ""
    userShare = ""
    
    handleSubmit = () => {
        //Share selected calendar with selected user
        console.log(this.calendar + ' ' + this.userShare)
    }
    handleBack = () => {
        //Go back to the main calendar page
        
    }

    handleCalendarChange(calendar) {
        this.calendar = calendar;
    }
    handleUserChange(user) {
        this.userShare = user;
    }

    render() {
        //Use userID from state to get this information

        //Get list of calendars we have
        let calendars = ['c1', 'c2']; //Dummy data for testing

        //Get list of users to share the calendar
        let users = ['u1', 'u2']; //Dummy data for testing

        return (
            <div>
                <label>Choose a calendar to share:</label> 
                <select id="calendar_select" onChange={(e) => this.handleCalendarChange(e.target.value)}>
                    {calendars.map(cal =>
                        <option
                            key={cal}
                        > {cal}
                        </option>
                    )}

                </select><br/>
                <label>Choose a user to share the calendar with</label>
                <select id="user_select" onChange={(e) => this.handleUserChange(e.target.value)}>
                    {users.map(u =>
                        <option
                            key={u}
                        > {u}
                        </option>
                    )}
                </select><br/>

                <button id="submit" value="Submit" onClick={this.handleSubmit}>Submit</button><br/>
                <button id="back" value="Back" onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

export default ShareCalendar