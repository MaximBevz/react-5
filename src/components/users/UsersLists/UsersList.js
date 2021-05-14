import {useState, useEffect} from 'react';
import User from "../../user/User";
import './UsersList.css';
import {Route} from "react-router-dom";
import SingleUser from "../SingleUser/SingleUser";

export default function UsersList(props) {
    let {match:{url}} = props;
    let [users, setUsers] = useState([]);
    let [page, setPage] = useState(1)

    useEffect( () => {
        fetch('https://reqres.in/api/users?page=' + page)
            .then(val => val.json())
            .then(usersList =>
                setUsers(usersList.data));
    }, [page]);

    const nextPage = () => setPage(page < 2 ? ++page : page);
    const prevPage = () => setPage(page >= 1 ? --page : page);

    return (
        <div className='users'>
            <div className="users-wrapper">
                <ul className='users-list'>
                    {
                        users.map(user => <User key={user.id} item={user} url={url}/>)
                    }
                </ul>
                <div className="pagination">
                    <button onClick={() => prevPage()}>prev</button>
                    <button onClick={() => nextPage()}>next</button>
                </div>
            </div>
            <div className="single-user-card">
                <Route exact path={url + '/:id'} component={SingleUser}/>
            </div>
        </div>

    );
}