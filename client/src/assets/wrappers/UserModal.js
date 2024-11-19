import styled from "styled-components";

const Wrapper = styled.div`
  .user-modal-container {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: transparent;

    &.show {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-start;
    }

    .ctas {
      margin-top: 3rem;
      background: var(--blue-500);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 2rem;
      border-radius: none none var(--round-md) none;
      color: var(--blue-50);
      gap: 20px;

      a {
        color: var(--blue-50);
        text-decoration: none;
        text-transform: capitalize;
      }
      button {
        text-transform: capitalize;
        .logout-icon {
          transform: rotate(180deg);
          margin-bottom: -3px;
        }
      }
    }
  }
`;
export default Wrapper;
