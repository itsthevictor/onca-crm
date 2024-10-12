import { Logo } from "../components";
import { Form, redirect } from "react-router-dom";
import { useState } from "react";
import { mainFetch } from "../utils/customFetch";

export const verifyEmailAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await mainFetch.post("/auth/login", data);
    //  toast.success("Signed in");
    return redirect("login");
  } catch (error) {
    //  toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};

const SetPasswordForm = () => {
  const [firstPass, setFirstPass] = useState(null);
  const [secondPass, setSecondPass] = useState(null);
  const [match, setMatch] = useState(false);

  const handleInput = () => {};
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
              name="password-1"
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
          >
            activează contul
          </button>
        </Form>
      </div>
    </div>
  );
};
export default SetPasswordForm;
