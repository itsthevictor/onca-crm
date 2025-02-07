import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="404-container">
          <h3>Ohh! Această resursă nu există!</h3>
          <p>Nu găsim ceea ce căutai</p>
          <Link to="/">&lsaquo; Acasă</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="error-container">
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
