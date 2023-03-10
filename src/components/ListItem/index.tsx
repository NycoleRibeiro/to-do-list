import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';

type Props = {
    item: Item
    onChange: (id: number, done: boolean) => void;
    onDelete: (id: number) => void;
}

export function ListItem({ item, onChange, onDelete }: Props) {
    const [isChecked, setIsChecked] = useState(item.done);

    const handleChange = (id: number) => {
        let done = !isChecked;
        setIsChecked(done);
        onChange(id, done);
    }

    const handleDelete = (id: number) => {
        onDelete(id);
    }

    return (
        <C.Container done={isChecked}>
            <label>{item.name}</label>
            <button 
            className="done"
            onClick={e => handleChange(item.id)}
            >
                <FontAwesomeIcon icon={faCircleCheck} />
            </button>
            <button 
            className="delete"
            onClick={e => handleDelete(item.id)}
            >
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </C.Container>
    );
}