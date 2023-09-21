import { Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const CalendarAddEvent = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(summary, description, location, startDateTime, endDateTime);
  };

  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");

  return (
    <>
      <div className="Calendar">
        <h1>Google Calendar</h1>
        <div className="addEvent">
          <form onSubmit={handleSubmit}>
            <label htmlFor="summary">Summary</label>
            <br />
            <input
              type="text"
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
            <br />
            <label htmlFor="description">Description</label>
            <br />
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <label htmlFor="location">Location</label>
            <br />
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <br />
            <label htmlFor="startDateTime">Start Date Time</label>
            <br />
            <input
              type="datetime-local"
              id="startDateTime"
              value={startDateTime}
              onChange={(e) => setStartDateTime(e.target.value)}
            />
            <br />
            <label htmlFor="endDateTime">End Date Time</label>
            <br />
            <input
              type="datetime-local"
              id="endDateTime"
              value={endDateTime}
              onChange={(e) => setEndDateTime(e.target.value)}
            />
            <br />
            <Button type="submit">Create event</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CalendarAddEvent;
