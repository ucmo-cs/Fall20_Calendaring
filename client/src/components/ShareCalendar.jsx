import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ApiService from "./../services/apiService"

//Require userID sent from previous component

function ShareCalendar() {
    const account_id = 0;
    const history = useHistory();

    const [calendars, setCalendars] = useState(Array())//ApiService.fetchCalendars(account_id)
    const [users, setUsers] = useState(Array())//ApiService.fetchAccountIds()

    const selCalendar = useRef()
    const selUser = useRef()

    useEffect(() => {
        ApiService.fetchCalendars(account_id)
            .then(res => {
                setCalendars(res.data)
                selCalendar.current = res.data[0].calendar_id
            })
        ApiService.fetchAccountIds()
            .then(res => {
                setUsers(res.data)
                selUser.current = res.data[0].account_id
            })

    }, [])

    const handleSubmit = () => {
        //Share selected calendar with selected user
        console.log((selCalendar.current) + ' ' + (selUser.current))
        ApiService.shareCalendar(selCalendar.current, selUser.current).then(res => {console.log('success')});

    }
    const handleBack = () => {
        //Go back to the main calendar page
        history.push('/calendar')
    }

    const handleCalendarChange = (calendar) => {
        selCalendar.current = calendar.split(' ')[0]
    }
    const handleUserChange = (user) => {
        selUser.current = user.split(' ')[0]
    }

    return (
        <div>
            <label>Choose a calendar to share:</label> 
            <select id="calendar_select" onChange={(e) => handleCalendarChange(e.target.value)}>
                {calendars.map(cal =>
                    <option key={cal.calendar_id}> {cal.calendar_id + ' ' + cal.title}
                    </option>
                )}

            </select><br/>
            <label>Choose a user to share the calendar with</label>
            <select id="user_select" onChange={(e) => handleUserChange(e.target.value)}>
                {users.map(u =>
                    <option key={u.account_id}> {u.account_id + ' ' + u.username}
                    </option>
                )}
            </select><br/>

            <button id="submit" value="Submit" onClick={handleSubmit}>Submit</button>&nbsp;
            <button id="back" value="Back" onClick={handleBack}>Back</button>
        </div>
    )
    
}

export default ShareCalendar;
