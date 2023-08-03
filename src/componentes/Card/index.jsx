import { TiDelete } from 'react-icons/ti'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import './Card.css'
function Card({ data, bgColor, deleteColaborador, isLike }) {
  const { nombre, puesto, urlFoto, id, favorite } = data

  return (
    <div className="card-colaborador">
      <TiDelete className="delete-card" onClick={() => deleteColaborador(id)} />
      <div className="card-header" style={{ backgroundColor: bgColor }}>
        <img src={urlFoto} alt={nombre} />
      </div>
      <div className="card-info">
        <h4>{nombre}</h4>
        <p>{puesto}</p>
        {favorite ? (
          <AiFillHeart
            color="red"
            cursor="pointer"
            onClick={() => isLike(id)}
          />
        ) : (
          <AiOutlineHeart cursor="pointer" onClick={() => isLike(id)} />
        )}
      </div>
    </div>
  )
}

export default Card
