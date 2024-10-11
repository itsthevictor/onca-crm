import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard-container {
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
    max-height: calc(100vh - var(--nav-height));
    .sidebar-container {
      display: none;
    }

    @media (min-width: 992px) {
      .sidebar-container {
        display: flex;
      }
      display: grid;
      grid-template-columns: 180px auto;
    }

    .dashboard-page {
      width: 100%;
      /* margin: 0 auto; */
      padding: 1rem 0;
      max-height: calc(100vh - var(--nav-height));
      /* overflow-y: scroll; */
    }
  }
`;
export default Wrapper;
