import React, { useEffect, useState } from 'react';

import * as S from './style';

export default function Body() {

    const [dados, setDados] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => setDados(json))
    }, []);

    return (
        <>
                {dados &&
                    dados.map(item => (
                        <>
                            <S.Container>
                                <S.Card>
                                    <S.ID>{item.id}</S.ID>
                                    <S.Title>{item.title}</S.Title>
                                    <S.Paragraph>{item.body}</S.Paragraph>
                                </S.Card>
                            </S.Container>
                        </>
                    ))
                }
        </>
    );
};