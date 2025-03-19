import styled from 'styled-components';

const Wrapper = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    user-select: none;
    .page-title {
      margin-bottom: 20px;
    }

    .form-container .card-container {
      padding: 25px;

      border-radius: var(--round-sm);
      border: 1px solid var(--grey-100);
      box-shadow: 0px 0px 9px -3px rgba(0, 0, 0, 0.09);
      .title h2 {
        text-align: center;

        margin-bottom: 10px;
        text-transform: capitalize;
      }
      form {
        width: 100%;

        display: grid;
        grid-template-columns: 300px 300px;
        grid-gap: 5px 20px;

        .form-row {
          width: 100%;
          margin-bottom: 5px;

          label {
            color: var(--grey-300);
            font-weight: 500;
            font-size: 0.8rem;
            text-transform: capitalize;
          }

          input,
          select,
          option {
            width: 100%;
            margin-top: 5px;
            padding: 5px 8px;
            border-radius: var(--round-sm);
            border: 1px solid var(--grey-100);
            outline: none;
            background: var(--grey-25);
            font-size: 0.9rem;

            &:disabled {
              border: 1px solid var(--grey-25);
              color: var(--grey-200);
            }
          }
          .role {
            width: 100%;
            display: flex;
            justify-content: space-between;
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
        .btn-row {
          display: flex;
          justify-content: flex-end;
        }

        .row {
          display: flex;
          margin-bottom: 10px;

          .upload-btn {
            background: inherit;
            cursor: pointer;
            opacity: 0.6;
            border: none;
            outline: none;
            transition: all 0.2s ease;
            border-radius: var(--round-md);

            .icon {
              cursor: pointer;
              color: var(--grey-400);
            }

            &:hover {
              opacity: 0.8;
            }
          }
          .image {
            position: relative;
            width: fit-content;
            max-width: 125px;
            display: flex;
            justify-content: flex-end;
            border-radius: 100%;

            img {
              width: auto;
              max-height: 125px;
            }

            .upload-label {
              position: absolute;
              top: 0;
              right: 0;

              input[type='file'] {
                padding-bottom: 3rem;
                z-index: 99;
              }
            }
          }
        }
      }
    }
  }
`;
export default Wrapper;
