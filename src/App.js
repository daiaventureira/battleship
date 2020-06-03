import React from 'react';
import './index.scss';
import Design from './Design';

class App extends React.Component{
    render(){ 
        return(
            <div>
                <div className="titleGame"><h1>Battle ship</h1></div>
                < Design />
            </div>
        );
    }
};

export default App;