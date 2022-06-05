import React from 'react'

export const Question = ({ arrays, slider }) => {
    return (
        <>
        <div className="QA">
            <div id="Question">Question: {arrays[slider].Question}</div>
            <div id="Answer">Answer: {arrays[slider].Answer}</div>
            </div>
        </>
    )

}