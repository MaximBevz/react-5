import {useReducer, useEffect} from 'react';
import User from "../../user/User";
import './UsersList.css';
import {Route} from "react-router-dom";
import SingleUser from "../SingleUser/SingleUser";

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USERS' :
            return {...state, users: action.payload};
        case 'SET_PAGE' :
            return {...state, page: action.payload};
        default :
            return state;
    }
}

export default function UsersList(props) {
    let {match:{url}} = props;

    let [state, dispatch] = useReducer(reducer, {users: [], page: 1});
    let {users, page} = state;

    useEffect( () => {
        fetch('https://reqres.in/api/users?page=' + page)
            .then(val => val.json())
            .then(usersList =>
                dispatch({type:'SET_USERS', payload: usersList.data}));
    }, [page]);

    const nextPage = () => dispatch({type:'SET_PAGE', payload:page < 2 ? ++page : page});
    const prevPage = () => dispatch({type:'SET_PAGE', payload:page >= 1 ? --page : page});

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