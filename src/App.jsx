import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './componentes/Header/Header.jsx'
import Form from './componentes/Form/Form.jsx'
import MyOrg from './componentes/MyOrg/index.jsx'
import Team from './componentes/Team/index.jsx'
import './App.css'
import Footer from './componentes/Footer/index.jsx'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: 'Front-End',
      nombre: 'Cristina Garcia',
      puesto: 'Aprendiz',
      urlFoto: 'https://github.com/Cristina-Garcia.png',
      favorite: true,
    },
  ])
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      titulo: 'Programación',
      colorDestaque: '#57c278',
      colorBg: '#d9f7e9',
    },
    {
      id: uuidv4(),
      titulo: 'Front-End',
      colorDestaque: '#82cffa',
      colorBg: '#e8f8ff',
    },
    {
      id: uuidv4(),
      titulo: 'Data Science',
      colorDestaque: '#a6d157',
      colorBg: '#f0f8e2',
    },
    {
      id: uuidv4(),
      titulo: 'Devops',
      colorDestaque: '#e06b69',
      colorBg: '#fde7e8',
    },
    {
      id: uuidv4(),
      titulo: 'UX y Diseño',
      colorDestaque: '#db6ebf',
      colorBg: '#fae9f5',
    },
    {
      id: uuidv4(),
      titulo: 'Móvil',
      colorDestaque: '#ffba05',
      colorBg: '#fff5d9',
    },
    {
      id: uuidv4(),
      titulo: 'Innovación y Gestión',
      colorDestaque: '#ff8a29',
      colorBg: '#ffeedf',
    },
  ])

  const isLike = (id) => {
    const updatesColaboradores = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.favorite = !colaborador.favorite
      }
      return colaborador
    })
    setColaboradores(updatesColaboradores)
  }

  const changeShowForm = () => {
    setShowForm(!showForm)
  }
  //Registrar colaborador

  const registerCollaborator = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  //Eliminar card colaborador
  const deleteCard = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => {
      return colaborador.id !== id
    })
    setColaboradores(nuevosColaboradores)
  }

  // <AiFillCloseCircle
  //   size={25}
  //   className="eliminar"
  //   onClick={eliminar(colaborador.id)}/>
  // Utilizando esta sintaxis pretendes pasar el resultado de la función y no la función que debería ser ejecutada. Así, el componente será eliminado una vez renderizado.

  //Actualizar color de equipo
  const updateColor = (color, id) => {
    const updateTeams = teams.map((team) => {
      if (team.id === id) {
        team.colorDestaque = color
      }
      return team
    })
    setTeams(updateTeams)
    console.log('Actualizando color:', color, id)
  }

  //Crear Equipos
  const createTeam = (newTeam) => {
    console.log(newTeam)
    setTeams([...teams, { ...newTeam, id: uuidv4() }])
  }

  return (
    <>
      <Header />
      {/* {showForm === true ? <Form /> : <></>} */}
      {showForm && (
        <Form
          equipos={teams.map((team) => {
            return team.titulo
          })}
          register={registerCollaborator}
          create={createTeam}
        />
      )}
      <MyOrg changeShowForm={changeShowForm} />
      {teams.map((team) => (
        <Team
          key={team.id}
          data={team}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === team.titulo
          )}
          deleteColaborador={deleteCard}
          updateColor={updateColor}
          isLike={isLike}
        />
      ))}
      <Footer />
    </>
  )
}

export default App
