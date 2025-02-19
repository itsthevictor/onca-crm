import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    width: 100vw;
    height: 100vh;
    background: var(--blue-500);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo-container {
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--grey-100);
      gap: 10px;
      margin-bottom: 30px;

      img {
        width: 50px;
      }
      .logo-text {
        font-size: 1.45em;
        font-style: italic;
        letter-spacing: 0.04em;

        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
    .form-container {
      width: 400px;
      padding: 30px;
      background: var(--blue-200);
      border-radius: var(--round-md);

      .title h2 {
        text-align: center;
        color: var(--primary-100);
        margin-bottom: 20px;
      }
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .form-row {
          width: 100%;
          margin-bottom: 10px;

          label {
            color: var(--grey-100);
          }

          input {
            width: 100%;
            margin-top: 10px;
            padding: 10px;
            border-radius: var(--round-sm);
            border: none;
            outline: none;
          }
        }

        a {
          color: var(--grey-100);
          font-size: 0.95em;
          text-decoration: none;
        }

        a:hover {
          color: var(--primary-000);
        }

        button {
          width: 100%;
          padding: 10px;
          border-radius: var(--round-sm);
          border: none;
          outline: none;
          background: var(--primary-200);
          color: var(--blue-500);
          font-size: 1.15em;
          font-weight: 500;
          cursor: pointer;

          &:hover {
            background: var(--primary-100);
            color: var(--blue-500);
          }
          &:disabled {
            background: var(--grey-200);
            /* color: var(--blue-500); */
            cursor: not-allowed;
          }
        }
      }

      .response-message {
        color: var(--grey-100);
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;

        a {
          color: var(--primary-100);
          font-size: 0.95em;
          text-decoration: none;
        }

        a:hover {
          color: var(--primary-000);
        }
      }
    }
  }
`;
export default Wrapper;
