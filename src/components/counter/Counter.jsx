import React , {useState}from 'react'

const Counter = () => {
    // States
    let [counter , setCounter] = useState(0)
    let [isShow , setIsShow] = useState(true)






    // logic
    const add = () => {
        console.log("add function fired")
        setCounter(counter++)
    }
    const minus = () => {
        console.log("minus function fired")
        setCounter(counter--)
    }
    const toggleText = () => {
        setIsShow(prevState => !prevState)
    }







// UI
  return (
    <div className='d-flex flex-column justify-content-center align-items-center' 
    style={{
        height: '100vh',
    }}
    >
        <h1>{counter}</h1>
        {
        isShow && <h5>you clicked {counter} times</h5>
        }
        <div className='d-flex gap-3'>
        <button className='py-2 px-5 btn btn-outline-primary' onClick={add}>+</button>
        <button className='py-2 px-5 btn btn-outline-danger' onClick={minus}>-</button>
        </div>
        <button className={`py-2 my-4 fw-bold px-5 btn  ${isShow ? ' btn-info' : ' btn-danger'}`} onClick={toggleText}>{isShow ? 'hide' : 'show' } text</button>
    </div>
  )
}

export default Counter