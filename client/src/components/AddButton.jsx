const AddButton = ({ text, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="add-btn">
      + {text}
    </button>
  );
};
export default AddButton;
