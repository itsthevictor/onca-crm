import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo-container">
      <img src="/images/blaze_logo.svg" />
      <div className="logo-text passion-one-bold">
        <Link className="logo-text passion-one-bold" to="/">
          BLAZE
        </Link>
      </div>
    </div>
  );
};
export default Logo;
