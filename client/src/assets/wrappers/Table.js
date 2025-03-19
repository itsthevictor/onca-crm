import styled from 'styled-components';

const Wrapper = styled.div`
  .global-filter {
    font-size: medium;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    color: var(--grey-900);
    background-color: white;
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
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
    ::placeholder {
      color: var(--grey-100);
    }
  }
  .form-container,
  .card-container {
    padding: 0.5rem;
    border-radius: var(--round-sm);
    border: 1px solid var(--grey-100);
    box-shadow: 0px 0px 9px -3px rgba(0, 0, 0, 0.09);
    width: fit-content;

    table {
      /* font-family: Arial, Helvetica, sans-serif; */
      border-collapse: collapse;
      width: fit-content;
      min-width: 30vw;
      text-align: left !important;
    }

    table th {
      padding: 10px 50px 10px 10px;
      text-align: left !important;
      color: var(--grey-200);
      font-size: small;
      border-bottom: 1px solid var(--grey-25);
    }

    table td {
      padding: 10px 50px 10px 10px;
      text-align: left;

      /* text-transform: capitalize; */
      font-size: small;
    }

    /* table tr:nth-child(even) {
        background-color: #f5f5f5;
      } */
    table tr {
      border-bottom: 1px solid var(--grey-25);
      color: var(--grey-900);
    }

    table tr:last-of-type {
      border-bottom: none;
    }

    table tr:hover {
      cursor: pointer;
      background-color: var(--grey-25);
    }

    table th,
    tfoot td {
      font-size: small;
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
`;

export default Wrapper;
