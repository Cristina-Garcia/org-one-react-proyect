import './Button.css'

const Button = ({ action }) => {
  return (
    <button type="submit" className="btb-create">
      {action}
    </button>
  )
}

export default Button
