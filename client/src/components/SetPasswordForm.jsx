import { useState } from "react";

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
  const [match, setMatch] = useState(false);
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
            <label htmlFor="password-1">password</label>
            <input type="password" id="password-1" name="password-1" />
          </div>

          <div className="form-row">
            {" "}
            <label htmlFor="password-2">password</label>
            <input type="password" id="password-2" name="password-2" />
          </div>

          <button type="submit" disabled={!match}>
            submit
          </button>
        </Form>
      </div>
    </div>
  );
};
export default SetPasswordForm;
