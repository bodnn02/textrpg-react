import React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { styles } from './GameLayout.css';

import { GameSidebar } from '../GameSidebar/GameSidebar';
import { GameHeader } from '../GameHeader/GameHeader';

export const GameLayout = () => {

    return (
        <div className='dashboard'>
            <GameSidebar />
            <main>
                <GameHeader />
                <div className="dashboard-content">
                    <Outlet />
                </div>
                <div className="dashboard-footer">
                    <div className="copyright">
                        © 2023
                    </div>
                </div>
            </main>
        </div>
    )
}
