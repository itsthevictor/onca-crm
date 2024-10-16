import { Logo } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/Login";
import { mainFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await mainFetch.post("/auth/login", data);
    toast.success("Signed in");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};
const Login = () => {
  return (
    <Wrapper>
      <div className="container">
        <Logo />
        <div className="form-container">
          <div className="title">
            <h2>autentificare</h2>
          </div>
          <Form method="post">
            <div className="form-row">
              {" "}
              <label htmlFor="email">email</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="form-row">
              {" "}
              <label htmlFor="password">password</label>
              <input type="password" id="password" name="password" />
            </div>
            <Link to="#">ai uitat parola?</Link>

            <button type="submit">submit</button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Login;
