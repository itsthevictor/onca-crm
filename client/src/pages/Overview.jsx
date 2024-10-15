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
            type={"variation"}
            title={"leads"}
            variation={8}
            value={16}
          />
          <CardComponent
            type={"variation"}
            title={"clienți"}
            variation={-2}
            value={4}
          />
          <CardComponent
            type={"variation"}
            title={"Încasări"}
            variation={0}
            value={45380}
          />{" "}
          <CardComponent
            type={"variation"}
            title={"leads"}
            variation={8}
            value={16}
          />{" "}
        </div>
      </div>
    </Wrapper>
  );
};
export default Overview;
