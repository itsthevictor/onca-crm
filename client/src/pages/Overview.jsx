import CardComponent from "../components/CardComponent";
import Wrapper from "../assets/wrappers/Overview";
const Overview = () => {
  return (
    <Wrapper>
      <div className="page-container">
        <div className="title">
          <h3>overview</h3>
        </div>
        <div className="content">
          <CardComponent
            type="variation"
            title="leads"
            variation={8}
            value={16}
          />
          <CardComponent
            type="variation"
            title="clienți"
            variation={-2}
            value={4}
          />
          <CardComponent
            type="variation"
            title="vânzări"
            variation={20}
            value={45000}
            money
          />{" "}
          <CardComponent
            type="variation"
            title="încasări"
            variation={14.8}
            value={23900}
            money
          />{" "}
        </div>
      </div>
    </Wrapper>
  );
};
export default Overview;
