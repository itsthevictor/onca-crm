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
    width: 30px;
  }
  .logo-container {
    margin-left: -5px;
    gap: 10px;
  }
  .logo-text {
    font-size: 1.35em;
    font-style: italic;
    letter-spacing: 0.03em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .search-box {
    margin-left: 10px;
    cursor: pointer;
    padding: 8px;
    width: 350px;
    border: none;
    border-radius: var(--round-sm);
    background: var(--blue-200);
    outline: none;
    color: var(--blue-50);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fs-500);
    text-transform: uppercase;
    transition: all 0.2s ease;

    &:hover {
      color: white;
    }
  }

  .status {
    padding-left: 70px;
    display: flex;
    align-items: center;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-container {
      width: 97.5%;
      height: 40px;
    }

    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
