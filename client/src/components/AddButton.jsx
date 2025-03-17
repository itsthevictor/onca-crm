import Wrapper from '../assets/wrappers/AddBtn';

const AddButton = ({ text, onClick, disabled }) => {
  return (
    <Wrapper>
      <button
        type='button'
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
