import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const handleChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300);

  return (
    <div className='global-filter'>
      Search:&nbsp;
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};
export default GlobalFilter;
