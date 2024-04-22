import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
        <header className={'header'}>
            <p className={'logo'}>COLOCO</p>
        </header>
        <main className={'main'}>
            <a className='link-wb'
               href={'https://www.wildberries.ru/brands/310616779-coloco'}
               rel ={'nofollow noreferrer'}
               target={'_blank'}
            >
                товары магазина
            </a>
            <a className='link-tg'
               href={'https://docs.google.com/forms/d/e/1FAIpQLSeKTpm_Y9LuCckIREGIgRxGF7Ug2VkZEWQTPvArbSSTG_CYJg/viewform?usp=sf_link'}
               rel ={'nofollow noreferrer'}
               target={'_blank'}
            >
                служба заботы
            </a>
        </main>
     <footer>

     </footer>
    </div>
  );
}

export default App;
