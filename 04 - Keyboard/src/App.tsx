import { useState, useEffect } from 'react';

function App() {
    const [rows, setRows] = useState([
        '`1234567890-='.split(''),
        'qwertyuiop[]\\'.split(''),
        "asdfghjklñ;'".split(''),
        'zxcvbnm,./'.split(''),
    ]);

    const [tembleke, setTembleke] = useState('f');

    const handler = (e: KeyboardEvent) => {
        if (e.key === tembleke) {
            const rowIndex = Math.round(Math.random() * 3);
            let keyIndex = Math.round(Math.random() * rows[rowIndex].length - 1);
            while (rows[rowIndex][keyIndex] === tembleke) {
                keyIndex = Math.round(Math.random() * rows[rowIndex].length - 1);
            }

            setTembleke(rows[rowIndex][keyIndex]);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handler);

        return () => {
            window.removeEventListener('keydown', handler);
        };
    }, [tembleke]);

    return (
        <div className='keyboard'>
            {rows.map((row, i) => {
                return (
                    <div className='row' key={i}>
                        {i === 1 && <button className='btn btn-tab'>Tab</button>}
                        {i === 2 && <button className='btn btn-caps'>Caps</button>}
                        {i === 3 && <button className='btn btn-shift'>Shift</button>}

                        {row.map((key) => (
                            <button
                                key={key}
                                className={`btn ${key === tembleke ? 'tembleke' : null}`}
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}

export default App;
