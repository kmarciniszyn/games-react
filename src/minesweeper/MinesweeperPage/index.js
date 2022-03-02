import React from 'react';
import Header from '../../common/Header';
import GameOptions from './GameOptions';
import { Wrapper } from './styled';

export default () => (
    <Wrapper>
        <Header title={"Minesweeper"} />
        <GameOptions />
    </Wrapper>
);