import styled from "styled-components";

const Wrapper = styled.div`
  .page-container {
    width: 100%;
    max-width: calc(100vw - 190px);
 
    @media (max-width: 992px) {
      max-width: 100%;
    }

    .title h3 {
      margin-bottom: 1.5rem;
    }

    .content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 10px;
    }
  }
`;
export default Wrapper;
