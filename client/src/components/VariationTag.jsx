import Wrapper from "../assets/wrappers/VariationTag";
import { HiTrendingUp } from "react-icons/hi";
import { HiTrendingDown } from "react-icons/hi";
import { HiMenuAlt4 } from "react-icons/hi";

const VariationTag = ({ props }) => {
  return (
    <Wrapper>
      <div className="container">
        <div
          className={
            props > 0
              ? "variation-tag plus"
              : props < 0
              ? "variation-tag minus"
              : "variation-tag"
          }
        >
          <span className="icon">
            {props > 0 ? (
              <HiTrendingUp size={15} />
            ) : props < 0 ? (
              <HiTrendingDown size={15} />
            ) : (
              <HiMenuAlt4 size={15} />
            )}
          </span>
          <span className="value"> {props}%</span>{" "}
        </div>{" "}
        <span className="clear">față de luna anterioară</span>
      </div>
    </Wrapper>
  );
};
export default VariationTag;
