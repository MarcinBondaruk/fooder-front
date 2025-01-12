import React from 'react';
import Header from './Header'
import Counter from './Counter'
import Recipes from './Recipes'

function App() {
    return (
        <div>
            <Header />
            <h1>Hello World from Fooder!</h1>
            <Counter />
            <Recipes />
        </div>
    );
}

export default App;
