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
      align-items: top;

      .options {
        width: fit-content;
        display: flex;
        flex-direction: column;
        background: var(--blue-500);
        height: fit-content;
        padding: 1rem 2rem;
        border-radius: var(--round-sm);
        gap: 0.5em;

        .option {
          width: 350px;
          cursor: pointer;
          outline: none;
          border: none;
          background: inherit;
          text-align: center;

          color: var(--grey-200);
          border-radius: var(--round-sm);

          padding: 10px;
          height: 90%;
          width: 350px;
          border: none;
          outline: none;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.2s ease;

          &:hover {
            background: var(--blue-300);
            color: var(--primary-100);
          }
        }
      }
    }
  }
`;

export default Wrapper;
