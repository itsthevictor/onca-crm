export const USER_COLUMNS = [
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
    Header: 'Email',
    Footer: 'Email',
    accessor: 'email',
    sticky: 'left',
  },

  {
    Header: 'Rol',
    Footer: 'Rol',
    accessor: 'role',
  },
];

export const GROUPED_USER_COLUMNS = [
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
