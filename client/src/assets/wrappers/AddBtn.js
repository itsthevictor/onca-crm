import styled from 'styled-components';

const Wrapper = styled.div`
  button {
    float: right;
    margin-top: 10px;
    width: fit-content;
    padding: 5px 10px;
    border-radius: var(--round-sm);
    border: none;
    outline: none;
    text-transform: capitalize;
    color: white;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2 ease;
    background: #0079ff;
    background: -webkit-gradient(
      linear,
      0% 0%,
      0% 90%,
      from(#2790ff),
      to(#017aff)
    );
    background: -webkit-linear-gradient(
      0% 0%,
      0% 90%,
      from(#2790ff),
      to(#017aff)
    );
    background: -moz-linear-gradient(center top, #2790ff, #017aff);
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
    &:disabled {
      background: var(--grey-200);
      /* color: var(--blue-500); */
      cursor: not-allowed;
    }
  }
`;

export default Wrapper;
