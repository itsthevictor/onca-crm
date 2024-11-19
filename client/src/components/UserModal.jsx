import { useDashboardContext } from "../layouts/Dashboard";
import { BiLogOutCircle } from "react-icons/bi";
import Wrapper from "../assets/wrappers/UserModal";
import { Link } from "react-router-dom";

const UserModal = () => {
  const { user, logOutUser, setShowLogout, showLogout } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showLogout ? "user-modal-container show" : "user-modal-container"
        }
        onClick={() => setShowLogout(false)}
      >
        <div className="ctas">
          <div className="link">
            <Link to="profil">profilul meu</Link>
          </div>
          <button className="add-btn" onClick={logOutUser}>
            log out <BiLogOutCircle className="logout-icon" size={14} />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default UserModal;
