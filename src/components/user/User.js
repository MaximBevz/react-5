import {Link} from "react-router-dom";
import './User.css';

export default function User({item, url}) {

    let {id, avatar, first_name} = item;
    let path = url + '/' + id;

    return (
        <li className='users-list-item'>
            <img src={avatar} alt='persone'/>
            <div className='users-list-wrapper'>
                <h4>{id}. {first_name}</h4>
                <Link to={{pathname: path, state: item}}>More info</Link>
            </div>
        </li>
    );
}