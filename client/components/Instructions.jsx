import React from 'react'

const Instructions = ({ children }) => {
    return (
        <div>
            <h3>How to Play:</h3>
            <ol>
                {/* Wrap <li> tags with <Instructions> tags */}
                {children}
            </ol>
        </div>
    )
}

export default Instructions