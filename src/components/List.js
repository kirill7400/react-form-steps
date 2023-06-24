function List({ data, deleteItem }) {
  console.log(data)
  data.sort((a, b) => {
    const toValidDate = (date) => {
      let v = date.split('.')
      return `${v[1]}.${v[0]}.${v[2]}`
    }

    return new Date(toValidDate(a.date)) - new Date(toValidDate(b.date))
  })

  let items = data.map((item, i) => {
    return(
      <div key={ i } className='listItem'>
        <div className='item'>{ item.date }</div>
        <div className='item'>{ item.passed }</div>
        <div className='item delete' onClick={ () => deleteItem(i) }>&#10006;</div>
      </div>
    )
  });

  return(
    <div className='list'>
      { items }
    </div>
  )
}

export default List