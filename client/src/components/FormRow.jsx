const FormRow = ({ type, name, labelText, defaultValue, placeholder }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ''}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
export default FormRow;
