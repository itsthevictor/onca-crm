// import { SetPasswordForm } from "../components";
import Wrapper from "../assets/wrappers/Login";
import { toast } from "react-toastify";
import { mainFetch } from "../utils/customFetch";
import { Form, useLoaderData, redirect } from "react-router-dom";
import { useState } from "react";
import { Logo } from "../components";

export const verifyEmailLoader = async ({ params }) => {
  const { token, email } = params;
  try {
    const response = await mainFetch.post(`/auth/verify-email`, {
      token,
      email,
    });
    console.log(response);
    // toast.success("email verified");
    // return redirect("/dashboard");
    const verified = true;
    return { verified, email };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const verifyEmailAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { password, email } = data;

  try {
    await mainFetch.patch("/users/activate-user", {
      password,
      email,
    });
    toast.success("user activat");
    return redirect("/autentificare");
  } catch (error) {
    return toast.error(error?.response?.data?.msg);
    console.log(error);
  }
};

const VerifyEmail = () => {
  const { verified, email } = useLoaderData();
  const [firstPass, setFirstPass] = useState(null);
  const [secondPass, setSecondPass] = useState(null);
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            {verified === true ? (
              <div className="container">
                <Logo />
                <div className="form-container">
                  <div className="title">
                    <h2>Activarea contului</h2>
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
                    <input type="hidden" name="email" value={email} />

                    <button
                      type="submit"
                      disabled={
                        !firstPass || !secondPass || firstPass !== secondPass
                      }
                    >
                      activează contul
                    </button>
                  </Form>
                </div>
              </div>
            ) : (
              <h3>
                something went wrong. please try again using the link in your
                email
              </h3>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default VerifyEmail;
