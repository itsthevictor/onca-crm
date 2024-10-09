import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--blue-500);
      min-height: calc(100vh - var(--nav-height));
      height: 100%;
      width: 170px;
      /* margin-top:calc(0 - var(--nav-height)) */
      /* margin-left: -250px; */
      transition: margin-left 0.3s ease-in-out;
    }
    /* .content {
      position: sticky;
      top: 0;
    } */
    header {
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
      /* transition: var(--transition); */
    }
    .icon {
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
    }
  }
`;
export default Wrapper;
