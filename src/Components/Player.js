import die from './img/die.gif'
import flee from './img/flee.gif'
import move from './img/move.gif'
import standImg from './img/stand.gif'
export default function Player(props) {
    const type = props.type;
    if (type == 1) return <img id="playerGif" src={standImg} alt="player" />
    else if (type == 2) return <img id="playerGif" src={move} alt="player" />
    else if (type == 3) return <img id="playerGif" src={die} alt="player" />
    else if (type == 4) return <img id="playerGif" src={flee} alt="player" />

    return <img id="playerGif" src={standImg} alt="player" />
  }