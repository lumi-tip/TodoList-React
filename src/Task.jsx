import React, {useState} from 'react'

export default function Task(props){

    const [hiden, setHiden] = useState(false)

    return (
        <>
            <div 
                className="d-flex align-items-center justify-content-between p-3 py-1 showDelete" 
                onMouseOver={()=>{setHiden(true)}}
                onMouseOut={()=>setHiden(false)}
            >
                <div>
                    <p className='m-0'>{props.title}</p>
                    <p className='m-0 text-muted'>{props.description}</p>
                </div>
                {hiden ? <button 
                    type='button' 
                    className='btn btn-danger deleteBtn' 
                    onClick={props.handleClick}
                    
                >🗑️
                </button>: <div></div>}
            </div>
            <hr className={props.display ? 'px-3 mx-3' : 'd-none'}/>
        </>
    )
}