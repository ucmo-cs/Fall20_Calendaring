import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import apiService from "./apiService"

//Require userID sent from previous component

const ShareCalendar = () => {
    const history = useHistory();

    let calendars = useRef(['c1', 'c2'])
    let users = useRef(['u1', 'u2'])

    const selCalendar = useRef(calendars.current[0])
    const selUser = useRef(users.current[0])

    const handleSubmit = () => {
        //Share selected calendar with selected user
        console.log(selCalendar.current + ' ' + selUser.current)
        apiService.runQuery("select * from account")

    }
    const handleBack = () => {
        //Go back to the main calendar page
        history.push('/calendar')
    }

    const handleCalendarChange = (calendar) => {
        selCalendar.current = calendar
    }
    const handleUserChange = (user) => {
        selUser.current = user
    }

    return (
        <div>
            <label>Choose a calendar to share:</label> 
            <select id="calendar_select" onChange={(e) => handleCalendarChange(e.target.value)}>
                {calendars.current.map(cal =>
                    <option key={cal}> {cal}
                    </option>
                )}

            </select><br/>
            <label>Choose a user to share the calendar with</label>
            <select id="user_select" onChange={(e) => handleUserChange(e.target.value)}>
                {users.current.map(u =>
                    <option key={u}> {u}
                    </option>
                )}
            </select><br/>

            <button id="submit" value="Submit" onClick={handleSubmit}>Submit</button><br/>
            <button id="back" value="Back" onClick={handleBack}>Back</button>
        </div>
    )
    
}

export default ShareCalendar
