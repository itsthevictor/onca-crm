import styled from 'styled-components';

const Wrapper = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navigation {
    text-decoration: none;
    color: var(--blue-100);
    font-size: 0.9rem;
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
      border-radius: var(--round-sm);
      position: relative;

      .form-row {
        width: 100%;
        margin-bottom: 5px;

        label {
          color: var(--grey-300);
          font-weight: 500;
          font-size: 0.8rem;
          text-transform: capitalize;
        }

        input {
          width: 100%;
          margin-top: 5px;
          padding: 10px;
          border-radius: var(--round-sm);
          border: 1px solid var(--grey-100);
          outline: none;
          background: var(--grey-25);
        }
      }
      .btn-row {
        display: flex;
        align-items: bottom;
        justify-content: flex-end;
      }
    }
  }
`;

export default Wrapper;
