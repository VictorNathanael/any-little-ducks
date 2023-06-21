import './App.css';

function App() {
    return (
        <div className='App'>
            <h1>Any Little Ducks</h1>
            <div id='input-ducks'>
                <p>Quantos patinhos foram passear?</p>
                <input type='number' name='number-of-ducks' />
            </div>
            <button>confirmar</button>
        </div>
    );
}

export default App;
