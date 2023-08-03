import Card from '../Card'
import hexToRgba from 'hex-to-rgba'
import './Team.css'

export default function Team({
  data,
  colaboradores,
  deleteColaborador,
  updateColor,
  isLike,
}) {
  const { colorDestaque, titulo, id } = data

  const bgColor = {
    backgroundColor: hexToRgba(colorDestaque, 0.6),
  }
  const styleTitle = {
    borderColor: colorDestaque,
  }

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="container-team" style={bgColor}>
          <input
            type="color"
            className="select-color"
            value={hexToRgba(colorDestaque, 0.6)}
            onChange={(event) => {
              updateColor(event.target.value, id)
            }}
          />
          <h3 style={styleTitle}>{titulo}</h3>
          <div className="cards-collaborators">
            {colaboradores.map((colaborador, index) => {
              return (
                <Card
                  data={colaborador}
                  key={index}
                  bgColor={colorDestaque}
                  deleteColaborador={deleteColaborador}
                  isLike={isLike}
                />
              )
            })}
          </div>
        </section>
      )}
    </>
  )
}
