import styled from "styled-components";

const Wrapper = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-left: 1em;
    .page-title {
      margin-bottom: 20px;
    }
    /* .logo-container {
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
  
      gap: 10px;
      margin-bottom: 20px;
      img {
        width: 50px;
      }
      .logo-text {
        font-size: 2em;
        font-style: italic;
        letter-spacing: 0.04em;
      }
    } */
    .form-container {
      /* width: 400px; */
      padding: 25px;
      /* background: var(--blue-200); */
      border-radius: var(--round-sm);
      border: 1px solid var(--grey-100);
      box-shadow: 0px 0px 9px -3px rgba(0, 0, 0, 0.09);
      .title h2 {
        text-align: center;
        /* color: var(--primary-100); */
        margin-bottom: 10px;
        text-transform: capitalize;
      }
      form {
        width: 100%;
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */
        display: grid;
        grid-template-columns: 300px 300px;
        grid-gap: 5px 20px;
        /* gap: 10px; */

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
          .role {
            margin-top: 5px;
            width: 100%;
            display: flex;
            justify-content: space-between;

            input[type="radio"] {
              display: none;
            }

            .radio-label {
              width: 100%;
              padding: 10px;
              font-size: 0.9em;
              /* border-top: 1px solid var(--grey-100);
              border-bottom: 1px solid var(--grey-100); */
              text-align: center;
              cursor: pointer;
              background: var(--grey-100);
              color: var(--grey-300);
              transition: all 0.25s ease;
            }

            .radio-label:not(last-of-type) {
              /* border-right: 1px solid var(--grey-100); */
            }

            .radio-label:first-of-type {
              border-radius: 5px 0 0 5px;
              /* border-left: 1px solid var(--grey-100); */
            }

            .radio-label:last-of-type {
              border-radius: 0 5px 5px 0;
              /* border-right: 1px solid var(--grey-100); */
            }

            input[type="radio"]:checked + label {
              background: var(--blue-200);
              color: var(--primary-000);
              font-weight: 500;
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
          margin-top: 10px;
          width: 100%;
          padding: 10px;
          border-radius: var(--round-sm);
          border: none;
          outline: none;
          background: var(--primary-200);
          color: white;
          font-size: 1.1em;
          font-weight: 500;
          cursor: pointer;

          &:hover {
            background: var(--primary-100);
            /* color: var(--blue-500); */
          }
          &:disabled {
            background: var(--grey-200);
            /* color: var(--blue-500); */
            cursor: not-allowed;
          }
        }
      }
    }
  }
`;
export default Wrapper;
