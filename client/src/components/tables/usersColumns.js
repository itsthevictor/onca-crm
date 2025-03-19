export const COLUMNS = [
  // {
  //   Header: 'Id',
  //   Footer: 'Id',
  //   accessor: '_id',
  //   disableFilters: true,
  //   sticky: 'left',
  // },
  {
    Header: 'Prenume',
    Footer: 'Prenume',
    accessor: 'firstName',
    sticky: 'left',
  },
  {
    Header: 'Nume',
    Footer: 'Nume',
    accessor: 'lastName',
    sticky: 'left',
  },

  {
    Header: 'Rol',
    Footer: 'Rol',
    accessor: 'role',
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Nume',
    Footer: 'Nume',
    columns: [
      {
        Header: 'Prenume',
        Footer: 'Prenume',
        accessor: 'firstName',
      },
      {
        Header: 'Nume',
        Footer: 'Nume',
        accessor: 'lastName',
      },
    ],
  },
];
