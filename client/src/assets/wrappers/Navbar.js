import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--blue-500);
  color: var(--blue-000);

  .nav-container {
    width: 97.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-container img {
    width: 35px;
  }
  .logo-container {
    gap: 10px;
  }
  .logo-text {
    font-size: 1em;
    font-family: ;
  }

  .search-box {
    padding: 8px;
    width: 350px;
    border-radius: var(--round-sm);
    background: var(--blue-200);
    border: none;
    outline: none;
    color: var(--grey-100);
  }
  .status {
    padding-left: 70px;
    display: flex;
    align-items: center;
  }
  .avatar {
    width: 30px;
    height: 30px;
  }

  /* .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  } */

  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-container {
      width: 97.5%;
      height: 40px;
    }

    /* .logo {
      display: none;
    } */

    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
