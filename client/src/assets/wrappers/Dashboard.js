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
      padding: 2rem;
      max-height: calc(100vh - var(--nav-height));
      background: white;

      .form-container,
      .card-container {
        padding: 25px;
        width: fit-content;
        border-radius: var(--round-sm);
        border: 1px solid var(--grey-100);
        box-shadow: 0px 0px 9px -3px rgba(0, 0, 0, 0.09);
      }

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

      table {
        /* font-family: Arial, Helvetica, sans-serif; */
        border-collapse: collapse;
        width: fit-content;
        text-align: left !important;
        /* thead tr th {
        } */
      }

      table th {
        padding: 10px 50px;
        text-align: left;
        text-transform: capitalize;
        font-size: small;
      }

      table td {
        padding: 10px 50px 10px 10px;
        text-align: left;
        text-transform: capitalize;
        font-size: small;
      }

      /* table tr:nth-child(even) {
        background-color: #f5f5f5;
      } */
      table tr {
        border-bottom: 1px solid var(--grey-25);
      }

      table tr:hover {
        cursor: pointer;
        background-color: var(--grey-25);
      }

      table th,
      tfoot td {
        padding-top: 12px 0;
        font-size: medium;
        color: var(--grey-400);
      }

      .global-filter {
        font-size: medium;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        color: var(--grey-900);
        background-color: white;
        padding: 0.5rem 0;
      }

      .global-filter input,
      .column-filter input {
        padding: 5px 10px;
        border: 1px solid var(--grey-100);
        border-radius: var(--round-sm);
        outline: none;
        transition: all 0.2s ease;
      }

      .global-filter input {
        box-shadow: 0px 0px 9px -3px rgba(0, 0, 0, 0.09);
      }
      /* .global-filter input:hover,
      .global-filter input:focus,
      .column-filter input:hover,
      .column-filter input:focus {
        background-color: white;
      } */

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
        background-color: var(--blue-400);
        color: white;
        cursor: pointer;
      }

      .column-selectors label:hover {
        background-color: var(--blue-400);
      }

      .column-selectors input[type='checkbox']:checked + label {
        color: black;
        background-color: grey !important;
      }
    }
  }
`;
export default Wrapper;
