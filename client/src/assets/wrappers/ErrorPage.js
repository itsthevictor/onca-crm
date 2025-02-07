import styled from "styled-components";

const Wrapper = styled.main`
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--blue-500);
  color: var(--grey-100);
  img {
    width: 90%;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-100);
  }

  a {
    text-decoration: none;
    color: var(--primary-000);
    text-transform: capitalize;
  }

  /* .404-container {
    height: calc(100% + var(--nav-height)+3rem)
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: var(--eerie-black);
    color: var(--platinum);
    overflow:visible;
  } */
`;

export default Wrapper;
