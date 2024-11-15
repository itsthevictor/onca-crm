import styled from "styled-components";

const Wrapper = styled.div`
  .sidebar-container {
    /* display: none; */
    background: var(--blue-500);
    height: calc(100vh - var(--nav-height));
    width: fit-content;
    padding-top: 0.5rem;
    color: var(--grey-100);
    .nav-links {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .row {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .nav-link {
        margin: 0 10px;
        display: flex;
        align-items: center;
        border-radius: var(--round-sm);
        padding: 5px 15px 5px 10px;
        color: var(--blue-50);
        text-decoration: none;
        transition: all 0.2s ease;
        text-transform: capitalize;

        &:hover {
          color: var(--primary-100);
        }

        &.active {
          background: var(--blue-200);
          color: var(--primary-100);
          /* font-weight: 500; */
        }

        span {
          margin-right: 10px;
          margin-bottom: -5px;
        }
      }
      .submenu {
        display: none;
      }

      .submenu:has(a) {
        margin-top: 10px;
      }

      .nav-link.active + .submenu,
      .submenu:has(> a.active) {
        color: var(--blue-50);
        width: 100%;
        display: flex;
        flex-direction: column;
        transition: all 0.2s ease-in-out;
        animation: smooth-appear 0.5s ease forwards;
        bottom: -100%;
        opacity: 0;
        /* font-weight: 600; */

        .submenu-link {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 0 10px 0;
          text-decoration: none;
          height: fit-content;
          font-size: 0.9rem;
          border-left: 2px solid transparent;
          text-transform: capitalize;
          color: var(--blue-50);
          opacity: 0.7;

          .icon {
            margin-right: 5px;
            margin-bottom: -5px;
          }

          &:hover {
            color: var(--primary-100);
            opacity: 0.85;
          }

          &.active {
            border-left: 2px solid var(--primary-100);
            border-radius: 0;
            background: var(--blue-200);
            color: var(--primary-100);
            opacity: 1;
          }
        }
      }
    }
  }
`;
export default Wrapper;
