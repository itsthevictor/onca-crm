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
      padding: 2rem;
      max-height: calc(100vh - var(--nav-height));
      background: white;

      /* .form-container,
      .card-container {
        padding: 25px;
        width: fit-content;
        border-radius: var(--round-sm);
        border: 1px solid var(--grey-100);
        box-shadow: 0px 0px 9px -3px rgba(0, 0, 0, 0.09);
      } */

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;

        a {
          text-decoration: none;

          width: fit-content;
          padding: 5px 10px;
          border-radius: var(--round-sm);
          border: none;
          outline: none;
          text-transform: capitalize;
          color: white;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2 ease;
          background: #0079ff;
          background: -webkit-gradient(
            linear,
            0% 0%,
            0% 90%,
            from(#2790ff),
            to(#017aff)
          );
          background: -webkit-linear-gradient(
            0% 0%,
            0% 90%,
            from(#2790ff),
            to(#017aff)
          );
          background: -moz-linear-gradient(center top, #2790ff, #017aff);
          opacity: 0.9;

          &:hover {
            opacity: 1;
          }
          &:disabled {
            background: var(--grey-200);
            /* color: var(--blue-500); */
            cursor: not-allowed;
          }
        }
      }
    }
  }
`;
export default Wrapper;
