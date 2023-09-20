import { GoogleLogin } from "@react-oauth/google";

const Calendar = () => {
  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage = () => {
    console.log("An error occured during login.");
  };

  return (
    <div className="calendarPage">
      <h1 className="calendarTitle">Calendar:</h1>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
};

export default Calendar;
