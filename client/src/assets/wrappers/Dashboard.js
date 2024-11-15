import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard-container {
    min-height: calc(100vh - var(--nav-height));
    z-index: 1;

    .sidebar-container {
      display: none;
    }

    @media (min-width: 992px) {
      .sidebar-container {
        display: flex;
      }
      display: grid;
      grid-template-columns: 165px auto;
    }

    .dashboard-page {
      width: 100%;
      padding: 0.5rem;
      max-height: calc(100vh - var(--nav-height));
    }
  }
`;
export default Wrapper;
