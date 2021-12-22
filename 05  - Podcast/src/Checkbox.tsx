import { useState } from 'react';
import check1 from './images/checkbox--checked.svg';
import check2 from './images/checkbox--unchecked.svg';
import './checkbox.css';

interface Props {
    title: string;
}

export default function Checkbox({ title }: Props) {

    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(!checked);
    }

    return (
        <>
            <label className={checked ? 'tachar' : undefined}>
                <div className='checks'>
                    <img src={checked ? check1 : check2} alt="" />
                </div>
                <input checked={checked} type="checkbox" onChange={handleChange} />
                {title}
            </label>
        </>
    )
}