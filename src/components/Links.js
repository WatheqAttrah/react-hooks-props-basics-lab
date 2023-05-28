import React from 'react';

export default function Links(props){
    return (
        <div>
            <h3>Links</h3>
            <a herf={props.github}>{props.github}</a>
            <a herf={props.linkedin}>{props.linkedin}</a>
        </div>
    )
};