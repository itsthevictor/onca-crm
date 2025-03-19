import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard-container {
    min-height: calc(100vh - var(--nav-height));
    z-index: 1;
    display: flex;

    .sidebar-container {
      display: none;
    }

    @media (min-width: 992px) {
      .sidebar-container {
        display: flex;
      }
    }

    .dashboard-page {
      width: 100%;
      padding: 1rem 2rem;
      max-height: calc(100vh - var(--nav-height));
      background: white;

      header {
        display: flex;
        align-items: bottom;
        justify-content: space-between;
        margin-bottom: 1rem;

        a {
          text-decoration: none;

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
      }

      .form-container,
      .card-container {
        padding: 25px;
        width: fit-content;
        border-radius: var(--round-sm);
        border: 1px solid var(--grey-100);
        box-shadow: 0px 0px 9px -3px rgba(0, 0, 0, 0.09);
      }

      table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      table td,
      table th {
        border: 1px solid #ddd;
        padding: 5px;
        text-align: center;
        text-transform: capitalize;
      }

      table tr:nth-child(even) {
        background-color: #f5f5f5;
      }

      table tr:hover {
        cursor: pointer;
        background-color: #ddd;
      }

      table th,
      tfoot td {
        padding-top: 12px;
        padding-bottom: 12px;
        background-color: var(--blue-300);
        color: white;
      }

      .global-filter {
        font-size: larger;
        display: flex;
        align-items: flex-end;
        color: white;
        background-color: var(--blue-300);
        padding: 10px 20px;
      }

      .global-filter input,
      .column-filter input {
        padding: 5px 10px;
        border: none;
        background-color: var(--blue-300);
        border-radius: 3px;
        outline: none;
        transition: all 0.2s ease;
      }
      .global-filter input:hover,
      .global-filter input:focus,
      .column-filter input:hover,
      .column-filter input:focus {
        background-color: white;
      }

      .column-filter input {
        width: 90%;
        margin-top: 8px;
      }
      .pagination-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        margin: 2rem 0;
      }
      .pagination-btns {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .pagination-btns button {
        color: white;
        background-color: var(--blue-300);
        padding: 10px 40px;
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 2px;
        transition: all 0.25s linear;
        text-transform: capitalize;
        font-weight: 600;
      }

      .pagination-btns button:hover {
        background-color: var(--blue-300);
      }

      .pagination-btns button:disabled {
        background-color: #ddd;
        color: grey;
      }

      .pagination-container input {
        width: 50px;
        padding: 5px 0 5px 10px;
        outline: none;
      }

      .page-size select {
        width: 50px;
        padding: 5px;
        outline: none;
      }
      .column-selectors {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 1rem 0;
      }

      .column-selectors input[type='checkbox'] {
        display: none;
      }

      .column-selectors label {
        padding: 5px 10px;
        border-radius: 3px;
        background-color: var(--blue-300);
        color: white;
        cursor: pointer;
      }

      .column-selectors label:hover {
        background-color: var(--blue-300);
      }

      .column-selectors input[type='checkbox']:checked + label {
        color: black;
        background-color: grey !important;
      }
    }
  }
`;
export default Wrapper;
