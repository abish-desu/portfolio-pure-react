import React from 'react'

const MyModal =({closeModal})=>{
    return (
        <>
        <div className="modal-wrapper"></div>
        <div className="modal-container">
        <h2> Form </h2>
        <button>Submit</button>
        <button onClick={closeModal}>Close</button>
        </div>
        </>
    )
}

export default MyModal;