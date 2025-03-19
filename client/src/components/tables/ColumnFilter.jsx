const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div className='column-filter'>
      <input
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
export default ColumnFilter;
