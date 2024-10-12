import { SetPasswordForm } from "../components";
import Wrapper from "../assets/wrappers/Login";
import { toast } from "react-toastify";
import { mainFetch } from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

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

const VerifyEmail = () => {
  const { verified, email } = useLoaderData();
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            {verified === true ? (
              <SetPasswordForm email={email} />
            ) : (
              <h3>
                something went wrong.please try again using the link in your
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
