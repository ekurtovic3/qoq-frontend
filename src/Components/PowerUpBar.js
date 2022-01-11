import './PowerUpBar.css'
import heal from './img/heal.png'
import wepon from './img/wepon.png'

export default function PowerUpBar(props) {

    const healActionHandler = () => {
        props.healAction();
    }

    return ( 
    <div className="bar">
    <div ><img className="photo" src={wepon} alt="Logo" /> <label >{props.player.damage}</label></div>
    <div ><img className="photo" src={heal} onClick={healActionHandler} alt="Logo" /> <label >{props.player.healingPoting}</label></div>
  </div>);
}