import React from 'react'

function UserTyping({userInput, className}: {userInput: string, className?: string}) {

    const charactersTyped = userInput.split("");


    return (
        <div className={className}>
            {charactersTyped.map((char, i) => {
                return <span key={`${char}_${i}`} className='text-6xl font-bold text-Colors-primary'>{char}</span>
            })}

        </div>
    )
}

export default UserTyping