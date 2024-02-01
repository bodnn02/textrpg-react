import React from 'react'
import {styles} from './GameSidebar.css'

export const GameSidebar = () => {
  return (
    <aside className='game-sidebar'>
        <div className='game-sidebar__header'>
            <a className='logo' href='/game'>
                Logotype
            </a>
        </div>
        <div className='game-sidebar__content'>
            <nav className='game-nav'>
                <a className='game-nav__item' href=''>
                    <div className='game-nav__icon'>
                        <img src='/images/game.svg'></img>
                    </div>
                    <div className='game-nav__wrapper'>
                        <h4 className='game-nav__h4'>Title</h4>
                        <h5 className='game-nav__h5'>Description</h5>
                    </div>
                </a>
                <a className='game-nav__item' href=''>
                    <div className='game-nav__icon'>
                        <img src='/images/game.svg'></img>
                    </div>
                    <div className='game-nav__wrapper'>
                        <h4 className='game-nav__h4'>Title</h4>
                        <h5 className='game-nav__h5'>Description</h5>
                    </div>
                </a>                <a className='game-nav__item' href=''>
                    <div className='game-nav__icon'>
                        <img src='/images/game.svg'></img>
                    </div>
                    <div className='game-nav__wrapper'>
                        <h4 className='game-nav__h4'>Title</h4>
                        <h5 className='game-nav__h5'>Description</h5>
                    </div>
                </a>
            </nav>
        </div>
    </aside>
  )
}
