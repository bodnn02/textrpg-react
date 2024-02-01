import React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { styles } from './GameLayout.css';

import { GameSidebar } from '../GameSidebar/GameSidebar';
import { GameHeader } from '../GameHeader/GameHeader';
import { GameFooter } from '../GameFooter/GameFooter'

export const GameLayout = () => {

    return (
        <div className='game'>
            <GameSidebar />
            <main>
                <GameHeader />
                <div className="game-content">
                    <Outlet />
                </div>
                <GameFooter/>
            </main>
        </div>
    )
}
