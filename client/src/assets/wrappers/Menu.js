import styled from "styled-components";

const Wrapper = styled.div`
  .sidebar-container {
    /* display: none; */
    display: flex;
    flex-direction: column;
    gap: 20px;

    background: var(--blue-500);
    height: calc(100vh - var(--nav-height));
    width: fit-content;
    padding: 20px 30px 20px 20px;

    color: var(--grey-100);

    .row {
      display: flex;

      a {
        border-radius: var(--round-sm);
        padding: 5px 10px;
        color: var(--blue-50);
        text-decoration: none;
        transition: all 0.2s ease;

        &:hover {
          color: var(--primary-100);
        }

        &.active {
          background: var(--blue-200);
          color: var(--primary-100);
          /* font-weight: 500; */
        }
      }
    }

    /* margin-left: -250px;
    transition: margin-left 0.3s ease-in-out;

    /* .content {
      position: sticky;
      top: 0;
    } */
    /* header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .show-sidebar {
      margin-left: 0;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--blue-100);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 3rem;
      color: var(--primary-200);
      transition: var(--transition);
    } */
    /* .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
    .pending {
      background: var(--blue-500);
    } */
  }
`;
export default Wrapper;
