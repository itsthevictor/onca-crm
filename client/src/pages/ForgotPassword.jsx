import { toast } from "react-toastify";
import { Logo } from "../components";
import { Form, Link, redirect, useActionData } from "react-router-dom";
import Wrapper from "../assets/wrappers/Login";
import { mainFetch } from "../utils/customFetch";

export const forgotPasswordAction = async ({ request }) => {
  console.log("forgot password action triggered");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await mainFetch.post("/auth/forgot-password", data);
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
  return null;
};

const ForgotPassword = () => {
  const data = useActionData();
  console.log(data);

  return (
    <Wrapper>
      <div className="container">
        <Logo />
        <div className="form-container">
          <div className="title">
            <h2>Am uitat parola</h2>
          </div>
          <Form method="post">
            <div className="form-row">
              <label htmlFor="email">email</label>
              <input type="email" id="email" name="email" />
            </div>
            <button type="submit">submit</button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default ForgotPassword;
