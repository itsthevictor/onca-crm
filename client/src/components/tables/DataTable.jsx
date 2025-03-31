import React, { useMemo, useRef } from 'react';
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from 'react-table';
import styled from 'styled-components';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import {
  FiChevronLeft,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronRight,
} from 'react-icons/fi';

// Styled components for the table
const TableContainer = styled.div`
  padding: 20px;
  background: white;
  border-radius: var(--round-sm);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--grey-100);
  overflow: hidden;

  .header,
  .pagination {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header {
    margin-bottom: 10px;
  }

  .pagination {
    margin-top: 1rem;
    color: var(--grey-300);
    font-size: 0.9rem;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;

  th,
  td {
    padding: 12px 16px;
    border-bottom: 1px solid #e2e8f0;
    text-align: left;
  }

  th {
    background: var(--grey-25);
    font-weight: 600;
    color: #374151;
    text-transform: capitalize;
    font-size: 14px;
  }

  tr:hover td {
    background: #f1f5f9;
  }
`;

const GlobalFilterInput = styled.input`
  padding: 10px;
  width: 250px;
  margin-bottom: 10px;
  border: 1px solid var(--grey-100);
  border-radius: 6px;
  outline: none;
  font-size: 14px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

// const Dropdown = styled.div`
//   position: relative;
//   display: inline-block;
// `;

const DropdownButton = styled.button`
  padding: 5px 10px;
  background: inherit;
  color: var(--grey-400);
  border: 1px solid var(--grey-50);
  border-radius: var(--round-sm);
  cursor: pointer;
  font-weight: 500;
  &:hover {
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
    color: white;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background: white;
  min-width: 150px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  ${Dropdown}:hover & {
    display: block;
  }
`;

const ExportOption = styled.button`
  width: 100%;
  padding: 10px;
  background: none;
  border: none;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #f1f5f9;
  }
`;

const PaginationButton = styled.button`
  padding: 8px 12px;
  margin: 5px;
  background: var(--grey-25);
  color: var(--grey-200);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  &:disabled {
    display: none;
    background: var(--grey-25);
    color: var(--grey-200);
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background: #1e40af;
  }
`;

const RowsPerPageSelect = styled.select`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  margin-left: 10px;
`;

const DataTable = ({ columns, data }) => {
  const tableRef = useRef(null);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 25 }, // Ensures initial pagination
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const exportToCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'table_data.csv');
  };

  const printTable = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
      <head>
        <title>Print</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: 12px 16px; border-bottom: 1px solid #e2e8f0; text-align: left; }
          th { background: #f8f9fa; font-weight: 600; color: #374151; text-transform: uppercase; }
        </style>
      </head>
      <body>
        ${tableRef.current.outerHTML}
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <TableContainer>
      <div className='header'>
        <GlobalFilterInput
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder='Filtrează...'
        />
        <Dropdown>
          <DropdownButton>Export</DropdownButton>
          <DropdownContent>
            <ExportOption onClick={exportToCSV}>CSV</ExportOption>
            <ExportOption onClick={printTable}>Print</ExportOption>
          </DropdownContent>
        </Dropdown>
      </div>

      <div ref={tableRef}>
        <StyledTable {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}{' '}
                    {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ''}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      </div>

      <div className='pagination'>
        <div>
          <label htmlFor='rowsPerPage'>Rânduri pe pagină:</label>
          <RowsPerPageSelect
            id='rowsPerPage'
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </RowsPerPageSelect>
        </div>
        <div className='navigation'>
          <PaginationButton
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <FiChevronsLeft />
          </PaginationButton>
          <PaginationButton onClick={previousPage} disabled={!canPreviousPage}>
            <FiChevronLeft />
          </PaginationButton>
          <span>
            {' '}
            Page {pageIndex + 1} of {pageOptions.length}{' '}
          </span>
          <PaginationButton onClick={nextPage} disabled={!canNextPage}>
            <FiChevronRight />
          </PaginationButton>
          <PaginationButton
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <FiChevronsRight />
          </PaginationButton>
        </div>
      </div>
    </TableContainer>
  );
};

export default DataTable;
