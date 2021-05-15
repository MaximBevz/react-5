import {useEffect, useState} from 'react';
import './SingleUser.css';

export default function SingleUser(props) {
    let {match:{params:{id}}, location:{state}} = props;
    let [user, setUser] = useState(null);

    useEffect(() => {
        setUser(state);
    }, [id]);

    return (
            user && <div className='user-card'><
                        img src={user.avatar} alt='avatar'/>
                        <h4>{id}.{user.first_name} {user.last_name}</h4>
                        <p>{user.email}</p>
                    </div>
    );
}