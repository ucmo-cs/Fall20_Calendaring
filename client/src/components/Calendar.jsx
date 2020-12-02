import React, { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  //the date state (date of selected day) is what we'll use for queries and anything else
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return(
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
  );
}

export default MyCalendar;