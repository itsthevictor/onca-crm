import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 2fr;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 2fr;
  }
  .dashboard-container {
    display: grid;
    grid-template-columns: 2fr;
    height: 100vh;
    max-height: 100vh;

    .dashboard-page {
      width: 90vw;
      margin: 0 auto;
      padding: 2rem 0;
      max-height: calc(100vh - var(--nav-height));
    }

    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: 2fr;
    }
  }
`;
export default Wrapper;
