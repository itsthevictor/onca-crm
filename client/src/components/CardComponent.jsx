import VariationTag from "./VariationTag";
import Wrapper from "../assets/wrappers/CardComponent";

const CardComponent = ({ type, variation, value, title }) => {
  return (
    <Wrapper>
      <div className="card-container">
        <div className="title">
          <h4>{title}</h4>
        </div>

        <div className="content">
          <span>{value}</span>
        </div>
        <div className="footer">
          {type === "variation" ? <VariationTag props={variation} /> : null}
        </div>
      </div>
    </Wrapper>
  );
};
export default CardComponent;
