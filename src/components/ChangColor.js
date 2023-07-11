import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ChangeColor } from '../features/theme';



export const ChangColor = () => {
    const [color, setColor] = useState('');
    const dispatch = useDispatch();
    return (
        <div>
            <input type="color" onChange={(event) => setColor(event.target.value)} />
            <button onClick={() => {
                dispatch(ChangeColor(color))
            }}>CHANG COLOR</button>
        </div>
    )
}
