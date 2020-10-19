import React, {Component} from 'react';
import { Card } from './card';

class Dashboard extends Component{

    render(){
        let cards = [];
        for ( let i=1; i<89 ; i+=4 ){
            if ( i<10 ){
                cards.push(<div className='col-3 my-3'>
                    <Card id={'00'+i} />
                    </div>)
            }else{
                cards.push(<div className='col-3 my-3'>
                    <Card id={'0'+i} />
                    </div>)
            }
        }

        return(
            <div className="row my-5">
                {cards}
            </div>
        );
    }

}

export {Dashboard};