import React from 'react'

export default function TodoInput({onEnter}) {
    return (
        <div>
            <input type="text" placeholder="Add your todos..." onKeyUp={onEnter}/>
        </div>
    )
}
