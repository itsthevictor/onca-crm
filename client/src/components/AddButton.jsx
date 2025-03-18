import Wrapper from '../assets/wrappers/AddBtn';

const AddButton = ({ text, onClick, disabled, type }) => {
  return (
    <Wrapper>
      <button
        type={type}
        onClick={onClick}
        className='add-btn'
        disabled={disabled}
      >
        {text}
      </button>
    </Wrapper>
  );
};
export default AddButton;
