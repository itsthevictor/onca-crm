import styled from "styled-components";

const Wrapper = styled.div`
  button {
    cursor: pointer;
  }
  .user-btn {
    background: var(--blue-500);
    border: 1px solid var(--blue-500);
    outline: none;

    position: relative;
    .avatar {
      width: 33px;
      height: 33px;
    }
  }
  .logout-btn {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: var(--round-sm);
    background: var(--blue-100);
    border: none;
    outline: none;

    color: var(--primary-0);
    position: absolute;
    top: 4rem;
    right: 0.5rem;
    gap: 5px;

    .icon {
      transform: rotate(180deg);
    }
  }
`;
export default Wrapper;