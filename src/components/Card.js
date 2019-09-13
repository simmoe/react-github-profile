import React from 'react'

export function Card(props) {
    console.log('From Card: ', props)

    return (
        <div className='card' style={{margin:'1em'}}>
            <img alt="avatar" style={{width:'70px'}} src={props.avatar_url}/>
            <div>
                <div style={{fontWeight:'bold'}}>{props.name}</div>
                <div>{props.blog}</div>
                <div>{props.company?'company: ' + props.company:''}</div>
                <div>{props.public_repos?'public repos: ' + props.public_repos:''}</div>
                <div><a href={props.html_url}>view profile</a></div>
            </div>
        </div>
    )
}

