import './CampoFormSelect.css'
const CampoFormSelect = ({ name, value, equipos, updateValue }) => {
  // map -> arreglo.map((equipo,index)=>{
  // return <option></option/>
  // })

  return (
    <div className="container-camp-select">
      <label htmlFor="">Equipo</label>
      <select name={name} id="team" value={value} onChange={updateValue}>
        <option className="option-default" value="" disabled defaultValue="">
          Selecionar Equipo
        </option>
        {equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  )
}
export default CampoFormSelect
