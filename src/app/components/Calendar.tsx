import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { useCallback, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

export default function MyCalendar() {
  // /slove Next 14 issue
  console.log("render!!!!");
  const [date, setDate]: any = useState(new Date());
  const [view, setView]: any = useState(Views.MONTH);
  const onView = useCallback((newView: any) => setView(newView), [setView]);
  const onNavigate = useCallback(
    (curr: any) => setDate(new Date(curr)),
    [setDate]
  );
  //  \slove Next 14 issue

  const [events, setEvents] = useState([
    {
      title: "Team Meeting",
      start: new Date(),
      end: new Date(2024, 8, 15, 24),
      allDay: false,
    },
    {
      title: "Lunch with Client",
      start: new Date(2024, 9, 15, 12, 0),
      end: new Date(2024, 9, 15, 13, 0),
      allDay: false,
    },
  ]);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      views={[Views.MONTH, Views.WEEK, Views.DAY]}
      style={{ height: 500 }}
      // to slove Next 14 issue
      view={view} // Include the view prop
      date={date} // Include the date prop
      onNavigate={onNavigate}
      onView={onView}
      // \to slove Next 14 issue
      className="text-black w-11/12"
    />
  );
}
