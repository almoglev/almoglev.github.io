import "./Category.scss"

function Category({ id, title, isActive, setSelected }) {
  return (
    <li className={isActive ? "category active" : "category"} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}

export default Category