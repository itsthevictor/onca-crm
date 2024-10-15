import styled from "styled-components";

const Wrapper = styled.div`
  .card-container {
    /* width: 300px; */
    padding: 20px;
    border-radius: var(--round-sm);
    border: 1px solid var(--grey-100);
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4 {
      text-transform: capitalize;
      color: var(--grey-300);
    }
    .content {
      span {
        font-family: "Roboto";
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }
`;
export default Wrapper;
