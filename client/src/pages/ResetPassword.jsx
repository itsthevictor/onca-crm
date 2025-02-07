import { Logo } from "../components";
import { Form, Link, redirect, useActionData } from "react-router-dom";
import Wrapper from "../assets/wrappers/Login";
import { mainFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

export const resetPasswordLoader = async ({ params }) => {
  console.log("reset password loader triggered");
  return null;
};

export const resetPasswordAction = async ({ request, params }) => {
  console.log("reset password action triggered");
  const { token, email } = params;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.token = token;
  data.email = email;
  console.log("sent data", data);

  try {
    const response = await mainFetch.post("/auth/reset-password", data);
    toast.success(response?.data?.msg);
    return response.data.msg;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    const msg = error?.response?.data?.msg;
    const status = error?.response?.status;
    return { msg, status };
  }
};

const ResetPassword = () => {
  const actionData = useActionData();
  console.log("action data", actionData);

  return (
    <Wrapper>
      <div className="container">
        <Logo />
        <div className="form-container">
          {!actionData && (
            <div className="title">
              <h2>Resetare parolă</h2>
            </div>
          )}
          {!actionData && (
            <Form method="post">
              <div className="form-row">
                <label htmlFor="password">parola nouă</label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit">resetează</button>
            </Form>
          )}
          {actionData && (
            <div className="response-message">
              {actionData.msg}
              {actionData.status === 200 && (
                <Link to="/autentificare">Mergi la autentificare</Link>
              )}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default ResetPassword;
