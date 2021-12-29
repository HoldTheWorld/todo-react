import styles from './pagination.module.css'
function Pagination({perPage, todos, paginate }) {

  const pageNumbers = []; // количество страниц 

  for (let i = 1; i <= Math.ceil(todos.length / perPage); i++) {
    pageNumbers.push(i)
  }

  return (
<div>
  <div className={styles.pagination_list}>
    {pageNumbers.map(number => (
      <div  key={number}>
        <a href='#' onClick={() =>  paginate(number)}> {number} </a>

      </div>
    ))}
  </div>

</div>
  )
}

export default Pagination
