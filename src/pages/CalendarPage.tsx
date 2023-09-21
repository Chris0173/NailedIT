import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import CalendarAddEvent from "../components/CalendarAddEvent";

const Calendar = () => {
  const responseMessage = (response: CredentialResponse) => {
    console.log(response);
  };
  const errorMessage = () => {
    console.log("An error occured during login.");
  };

  return (
    <div className="calendarPage">
      <h1 className="calendarTitle">Calendar:</h1>
      <GoogleLogin
        onSuccess={responseMessage}
        onError={errorMessage}
        type="standard"
      />
      <div className="addEvent">
        <CalendarAddEvent />
      </div>
    </div>
  );
};

export default Calendar;
