import { useRef } from 'react'

function Add({ add }) {
  const date = useRef()
  const passed = useRef()

  const addWork = () => {
    if (date.current.value && date.current.value.split('.').length === 3)
      add({ date: date.current.value, passed: passed.current.value })
    else alert('Введена невалидная дата!')
  }

  return(
    <div className='add'>
      <input
        id='date'
        className='date'
        name='date'
        placeholder='Дата (ДД.ММ.ГГ)'
        ref={ date }
      />
      <input
        id='passed'
        className='passed'
        name='passed'
        placeholder='Пройдено, км'
        ref={ passed }
      />
      <button className='btn' onClick={ addWork }>Ok</button>
    </div>
  )
}

export default Add