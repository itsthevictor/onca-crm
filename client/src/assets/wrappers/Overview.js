import styled from "styled-components";

const Wrapper = styled.div`
  .page-container {
    padding-right: 10px;
    max-width: calc(100vw - 190px);
    /* background: chartreuse; */
    .title h3 {
      margin-bottom: 1.5rem;
    }

    .content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 10px;
    }
  }
`;
export default Wrapper;
