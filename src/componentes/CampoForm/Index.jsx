import './CampoForm.css'
const CampoForm = ({
  titulo,
  placeholder,
  required,
  name,
  updateValue,
  type = 'text',
}) => {
  // const handleChange=(e)=>{
  //   e.preventDefault()
  // }

  return (
    <div className="container-campo">
      <label htmlFor="">{titulo}</label>
      <input
        className="campo-input"
        placeholder={placeholder}
        required={required}
        name={name}
        onChange={updateValue}
        type={type}
      />
    </div>
  )
}
export default CampoForm
