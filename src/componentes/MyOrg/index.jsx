import './MyOrg.css'

const MyOrg = (props) => {
  return (
    <section className="section-org">
      <h3>Mi organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.changeShowForm} />
    </section>
  )
}

export default MyOrg
