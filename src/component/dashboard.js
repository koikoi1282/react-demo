import React from 'react';
import { Card } from './card';

function Dashboard(props){
    return(
        <div className="row">
            <div className="col">
                <Card />
            </div>
            <div className='col'>
                <Card />
            </div>
        </div>
    );
}

export {Dashboard};