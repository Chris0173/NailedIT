import { Button } from "@chakra-ui/react";
import "./LoginForm.css";

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  return (
    <div className="loginFormContainer">
      <div className="LoginForm">
        <form>
          <label>Email:</label>
          <input type="text" name="email" id="email" required />
          <br />
          <label>Password:</label>
          <input type="password" required />
          <br />
          <Button type="submit">Login!</Button>
          <Button onClick={onClose}>Close</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
