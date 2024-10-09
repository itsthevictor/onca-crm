import styled from "styled-components";

const Wrapper = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo-container {
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* color: var(--grey-100); */
      gap: 10px;
      margin-bottom: 30px;
      img {
        width: 50px;
      }
      .logo-text {
        font-size: 2em;
        font-style: italic;
        letter-spacing: 0.04em;
      }
    }
    .form-container {
      width: 400px;
      padding: 30px;
      /* background: var(--blue-200); */
      border-radius: var(--round-md);
      border: 1px solid var(--grey-100);
      .title h2 {
        text-align: center;
        /* color: var(--primary-100); */
        margin-bottom: 20px;
        text-transform: capitalize;
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
            /* color: var(--grey-100); */
          }

          input {
            width: 100%;
            margin-top: 10px;
            padding: 10px;
            border-radius: var(--round-sm);
            border: 1px solid var(--grey-100);
            outline: none;
          }
          .role {
            margin-top: 10px;
            width: 100%;
            display: flex;
            justify-content: space-between;

            input[type="radio"] {
              display: none;
            }

            .radio-label {
              width: 100%;
              padding: 12px 14px;
              border-top: 1px solid var(--grey-100);
              border-bottom: 1px solid var(--grey-100);
              text-align: center;
              cursor: pointer;
            }

            .radio-label:not(last-of-type) {
              border-right: 1px solid var(--grey-100);
            }

            .radio-label:first-of-type {
              border-radius: 10px 0 0 10px;
              border-left: 1px solid var(--grey-100);
            }

            .radio-label:last-of-type {
              border-radius: 0 10px 10px 0;
              border-right: 1px solid var(--grey-100);
            }

            input[type="radio"]:checked + label {
              background: var(--blue-400);
              color: white;
            }
          }
        }

        a {
          color: var(--grey-100);
          font-size: 0.95em;
          text-decoration: none;
        }

        a:hover {
          color: var(--primary-100);
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
            color: var(--blue-500);
            cursor: not-allowed;
          }
        }
      }
    }
  }
`;
export default Wrapper;
