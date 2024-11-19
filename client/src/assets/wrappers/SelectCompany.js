import styled from "styled-components";

const Wrapper = styled.div`
  .select-container {
    display: none;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;

    &.show {
      display: flex;
      justify-content: center;
      align-items: flex-start;

      .options {
        width: fit-content;
        display: flex;
        flex-direction: column;
        background: var(--blue-500);
        height: fit-content;
        padding: 0.7rem 2rem 1.5rem 2rem;
        border-radius: var(--round-sm);
        gap: 0.5em;

        .option {
          width: 350px;
          cursor: pointer;
          outline: none;
          border: none;
          background: inherit;
          text-align: center;
          color: var(--blue-50);
          border-radius: var(--round-sm);
          padding: 8px;
          font-size: var(--fs-500);
          text-transform: uppercase;
          transition: all 0.2s ease;

          &:hover {
            background: var(--blue-200);
            color: white;
          }
        }
      }
    }
  }
`;

export default Wrapper;
