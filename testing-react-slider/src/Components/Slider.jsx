import React, { useState } from 'react'
import { Question } from './Question';

export const Slider = () => {
    let arrays = [{
        "id": 1,
        "Question": "Java",
        "Answer": "JavaScript",
    }, {
        "id": 2,
        "Question": "Php",
        "Answer": "Python",
    }, {
        "id": 3,
        "Question": "DSA",
        "Answer": "JavaScript",
    }, {
        "id": 4,
        "Question": "React",
        "Answer": "TypeScript",
    }]
    const [slider, setSlider] = useState(0);
    const handleClick = (val) => {
        setSlider(slider + val)
    }
    return (
        <>
            <Question slider={slider} arrays={arrays} />
            {slider !== 0 && <button onClick={() => handleClick(-1)}>Previous</button>}
            {slider !== (arrays.length - 1) && <button onClick={() => handleClick(1)}>Next</button>}
        </>
    )
}