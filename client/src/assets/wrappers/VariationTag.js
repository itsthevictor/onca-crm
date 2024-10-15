import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    gap: 10px;
    .variation-tag {
      display: flex;
      min-width: 70px;
      width: fit-content;
      justify-content: center;
      align-items: center;
      font-size: 0.85rem;
      font-weight: 700;
      padding: 1px 7px 2px 7px;
      font-family: "Courier New", monospace;
      border-radius: var(--round-sm);
      background: var(--grey-100);
      color: var(--grey-300);
      gap: 5px;

      &.minus {
        background: var(--red-000);
        color: var(--red-100);
      }

      &.plus {
        background: var(--primary-0);
        color: var(--primary-400);
      }

      .icon {
        padding-top: 5px;
      }
    }
    .clear {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--grey-300);
    }
  }
`;
export default Wrapper;
