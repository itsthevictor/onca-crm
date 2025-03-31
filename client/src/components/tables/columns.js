export const USER_COLUMNS = [
  {
    Header: 'Prenume',

    accessor: 'firstName',
  },
  {
    Header: 'Nume',
    accessor: 'lastName',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },

  {
    Header: 'Rol',
    accessor: 'role',
  },
];

export const GROUPED_USER_COLUMNS = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Nume',
    columns: [
      {
        Header: 'Prenume',

        accessor: 'firstName',
      },
      {
        Header: 'Nume',
        accessor: 'lastName',
      },
    ],
  },
];
