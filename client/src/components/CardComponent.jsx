import VariationTag from "./VariationTag";
import Wrapper from "../assets/wrappers/CardComponent";
import { formatCurrency } from "../utils/helpers";

const CardComponent = ({ type, variation, value, title, money }) => {
  console.log(value);

  return (
    <Wrapper>
      <div className="card-container">
        <div className="title">
          <h4>{title}</h4>
        </div>

        <div className="content">
          <span>{money ? formatCurrency(value, 0) : value}</span>
        </div>
        <div className="footer">
          {type === "variation" ? <VariationTag props={variation} /> : null}
        </div>
      </div>
    </Wrapper>
  );
};
export default CardComponent;
