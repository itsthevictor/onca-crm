import { useDashboardContext } from "../layouts/Dashboard";
import Wrapper from "../assets/wrappers/SelectCompany";

const SelectCompany = () => {
  const {
    user,
    logOutUser,
    activeCompany,
    setActiveCompany,
    setSelectCompany,
    selectCompany,
  } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={selectCompany ? "select-container show" : "select-container"}
        onClick={() => setSelectCompany(false)}
      >
        <div class="options">
          <button
            className="option"
            value="hai sincer"
            onClick={(e) => {
              setActiveCompany(e.target.value);
              setSelectCompany(false);
            }}
          >
            hai sincer
          </button>
          <button
            className="option"
            value="foaie verde"
            onClick={(e) => {
              setActiveCompany(e.target.value);
              setSelectCompany(false);
            }}
          >
            foaie verde
          </button>
          <button
            className="option"
            value="ceapa verde"
            onClick={(e) => {
              setActiveCompany(e.target.value);
              setSelectCompany(false);
            }}
          >
            ceapa verde
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default SelectCompany;
