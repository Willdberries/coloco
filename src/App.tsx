import React, {useEffect} from 'react';

import './App.css';

function App() {
    const clickButton = (event:string) =>{
        (window as any)?.gtag('event', `clickButtonOpen${event}`, { event_name: event })
    }

    useEffect(()=>{
        (window as any)?.gtag('event', 'open', { event_name: 'openPage' })},[])

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
               onClick={()=>clickButton('WB')}
            >
                товары магазина
            </a>
            <a className='link-tg'
               href={'https://docs.google.com/forms/d/e/1FAIpQLSeKTpm_Y9LuCckIREGIgRxGF7Ug2VkZEWQTPvArbSSTG_CYJg/viewform?usp=sf_link'}
               rel ={'nofollow noreferrer'}
               target={'_blank'}
               onClick={()=>clickButton('Help')}
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
