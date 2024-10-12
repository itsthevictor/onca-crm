import { Logo } from "../components";
import { Form, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { mainFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

const SetPasswordForm = ({ email }) => {
  const [firstPass, setFirstPass] = useState(null);
  const [secondPass, setSecondPass] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      await mainFetch.patch("/users/activate-user", {
        password: firstPass,
        email,
      });
      toast.success("user activat");
      await navigate("/autentificare");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      console.log(error);
    }
  };
  return (
    <div className="container">
      <Logo />
      <div className="form-container">
        <div className="title">
          <h2>Setarea contului</h2>
        </div>
        <Form method="post">
          <div className="form-row">
            {" "}
            <label htmlFor="password-1">Parola</label>
            <input
              type="password"
              id="password-1"
              name="password"
              onChange={(e) => {
                setFirstPass(e.target.value);
              }}
            />
          </div>

          <div className="form-row">
            {" "}
            <label htmlFor="password-2">Confirmă parola</label>
            <input
              type="password"
              id="password-2"
              name="password-2"
              onChange={(e) => {
                setSecondPass(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            disabled={!firstPass || !secondPass || firstPass !== secondPass}
            onClick={handleSubmit}
          >
            activează contul
          </button>
        </Form>
      </div>
    </div>
  );
};
export default SetPasswordForm;
