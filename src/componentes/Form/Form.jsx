import './Form.css'
import CampoForm from '../CampoForm/Index'
import CampoFormSelect from '../CampoFormSelect/Index'
import Button from '../Button'
import { useState } from 'react'

const Form = ({ equipos, register, create }) => {
  const [formIn, setFormIn] = useState({
    nombre: '',
    puesto: '',
    urlFoto: '',
    equipo: '',
  })
  const [sectionIn, setSectionIn] = useState({
    titulo: '',
    color: '',
  })
  const handleSubmit = (event) => {
    event.preventDefault()

    let datosEnviados = {
      nombre: formIn.nombre,
      puesto: formIn.puesto,
      urlFoto: formIn.urlFoto,
      equipo: formIn.equipo,
    }
    register(datosEnviados)
  }

  const handleTeam = (event) => {
    event.preventDefault()
    create({ titulo: sectionIn.titulo, colorDestaque: sectionIn.color })
  }
  const handleChange = (event) => {
    setFormIn({
      ...formIn,
      [event.target.name]: event.target.value,
    })
  }
  const handleChangeSection = (event) => {
    setSectionIn({
      ...sectionIn,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <section className="container-form">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Rellene el formulario para crear el colaborador</h2>
        <CampoForm
          titulo="Nombre"
          placeholder="Ingresar Nombre"
          required
          name="nombre"
          value={formIn.nombre}
          updateValue={handleChange}
        />
        <CampoForm
          titulo="Puesto"
          placeholder="Ingresa Puesto"
          required
          name="puesto"
          value={formIn.puesto}
          updateValue={handleChange}
        />
        <CampoForm
          titulo="Foto"
          placeholder="Ingresa enlace de Foto"
          required
          name="urlFoto"
          value={formIn.urlFoto}
          updateValue={handleChange}
        />
        <CampoFormSelect
          required
          equipos={equipos}
          value={formIn.equipo}
          updateValue={handleChange}
          name="equipo"
        />
        <Button action="Crear" />
      </form>
      <form className="form" onSubmit={handleTeam}>
        <h2>Rellene el formulario para crear el equipo</h2>
        <CampoForm
          titulo="Titulo"
          placeholder="Ingresar Titulo"
          required
          name="titulo"
          value={sectionIn.titulo}
          updateValue={handleChangeSection}
        />
        <CampoForm
          titulo="Color"
          placeholder="Ingresar el  color en Hex"
          required
          name="color"
          type="color"
          value={sectionIn.color}
          updateValue={handleChangeSection}
        />
        <Button action="Registrar Equipo" />
      </form>
    </section>
  )
}

export default Form
