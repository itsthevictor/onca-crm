import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard-container {
    min-height: calc(100vh - var(--nav-height));
    z-index: 1;
    display: flex;

    .sidebar-container {
      display: none;
    }

    @media (min-width: 992px) {
      .sidebar-container {
        display: flex;
      }
    }

    .dashboard-page {
      width: 100%;
      padding: 1rem 2rem;
      max-height: calc(100vh - var(--nav-height));
      background: white;
    }
  }
`;
export default Wrapper;
