import { useDashboardContext } from '../layouts/Dashboard';
import Wrapper from '../assets/wrappers/SelectCompany';

const companies = [
  {
    _id: '673e1d63fc13ae5ae2eecfed',

    denumire: 'InnoZ',
  },
  {
    _id: '673e1d63fc13ae5ae2eecfee',

    denumire: 'Shufflebeat',
  },
  {
    _id: '673e1d63fc13ae5ae2eecfef',

    denumire: 'Kare',
  },
  {
    _id: '673e1d63fc13ae5ae2eecff0',

    denumire: 'Blogspan',
  },
  {
    _id: '673e1d63fc13ae5ae2eecff1',

    denumire: 'Cogibox',
  },
];

const SelectCompany = () => {
  const {
    user,
    logOutUser,
    activeCompany,
    setActiveCompany,
    setSelectCompany,
    selectCompany,
  } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={selectCompany ? 'select-container show' : 'select-container'}
        onClick={() => setSelectCompany(false)}
      >
        <div className='options'>
          {companies.map((item, i) => (
            <button
              key={i}
              className='option'
              value={item.denumire}
              onClick={(e) => {
                setActiveCompany(e.target.value);
                setSelectCompany(false);
              }}
            >
              {item.denumire}
            </button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default SelectCompany;
