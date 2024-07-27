import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Character() {

    const { id } = useParams();

    return (
        <CharacterStyled>
            Gallery
        </CharacterStyled>
    )
}

const CharacterStyled = styled.div`

`;

export default Character
