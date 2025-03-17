import styled from 'styled-components';

const Wrapper = styled.div`
  .card-container {
    /* width: 300px; */
    padding: 20px;
    border-radius: var(--round-sm);
    border: 1px solid var(--grey-100);
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0px 0px 9px -3px rgba(0, 0, 0, 0.09);

    h4 {
      text-transform: capitalize;
      color: var(--grey-300);
    }
    .content {
      span {
        font-family: 'Roboto';
        font-size: 2rem;
        font-weight: 600;
        color: var(--grey-900);
      }
    }
  }
`;
export default Wrapper;
