import styled from "styled-components";

const Wrapper = styled.div`
  padding-right: 1rem;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
  .add-company {
    form {
      width: fit-content;
      display: grid;
      grid-template-columns: 300px 300px;
      grid-gap: 5px 20px;
      padding: 2rem;
      margin-top: 1rem;
      border: 1px solid var(--grey-200);
      border-radius: var(--round-lg);
      position: relative;

      .form-row {
        width: 100%;
        margin-bottom: 5px;

        label {
          color: var(--grey-300);
          font-weight: 500;
          text-transform: capitalize;
        }

        input {
          width: 100%;
          margin-top: 5px;
          padding: 10px;
          border-radius: var(--round-sm);
          border: 1px solid var(--grey-100);
          outline: none;
          background: var(--grey-100);
        }
      }
      .submit-btn {
        padding: 7px 0;
        position: absolute;
        bottom: 2.3rem;
        right: 2rem;
      }
    }
  }
`;

export default Wrapper;
