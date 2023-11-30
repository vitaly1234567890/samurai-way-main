import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import styles from './users.module.css'

type UsersPropsType = {
 users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers( [
                {
                    id: 1,
                    photoUrl: 'http://images11.domashnyochag.ru/upload/img_cache/eb2/eb269ad628964fc57f136091a7eb4c9d_cropped_1200x752.jpg',
                    folowed: true,
                    fullName: 'Dmitry',
                    status: "I am a boss",
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'http://images11.domashnyochag.ru/upload/img_cache/eb2/eb269ad628964fc57f136091a7eb4c9d_cropped_1200x752.jpg',
                    folowed: false,
                    fullName: 'Sasha',
                    status: "I am a boss too",
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'http://images11.domashnyochag.ru/upload/img_cache/eb2/eb269ad628964fc57f136091a7eb4c9d_cropped_1200x752.jpg',
                    folowed: false,
                    fullName: 'Andrew',
                    status: "I am a boss too",
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u=>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt=""/>
                        </div>
                        <div>
                            { u.folowed ?
                                <button onClick={()=> {props.unfollow(u.id)}}>unfollow</button> :
                                <button onClick={()=> {props.follow(u.id)}}>Follow</button>}

                        </div>
                    </span>

                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    );
};
