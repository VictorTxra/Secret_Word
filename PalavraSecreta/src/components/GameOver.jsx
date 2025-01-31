import './GameOver.css';

const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1>GAME OVER</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>TENTE NOVAMENTE</button>
    </div>
  )
}


export default GameOver