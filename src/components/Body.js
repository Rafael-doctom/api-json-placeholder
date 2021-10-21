import React, { useEffect, useState } from 'react';

export default function Body() {

    const [dados, setDados] = useState()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => setDados(json))
    }, [])

    return (
        <>
            <div className="Container">
                {dados &&
                    dados.map(item => (
                        <>
                            <span>{item.id}</span>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                        </>
                    ))
                }
            </div>
        </>
    )
}