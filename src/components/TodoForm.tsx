import React, { useRef } from 'react'


interface TodoFormProps {
    onAdd(title: string): void
}


export const TodoForm: React.FC<TodoFormProps> = props => {

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }

    return (
        <div className='input-field mt2'>
            <input
                ref={ref}
                onKeyPress={keyPressHandler} 
                type="text" 
                id="title" 
                placeholder="Введите название дела"/>
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
}