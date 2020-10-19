import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Card extends Component{
    constructor(props) {
        super(props);
        this.state={
            locationName: null,
            rain: null,
            weather: null,
            temperature: null,
        }
      }

    componentDidMount(){
        fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-'+ this.props.id +'?Authorization=CWB-3792DFDF-06AA-4EAC-A54E-2B6081A7486F&limit=1&format=JSON&sort=time&startTime=')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({locationName: data['records']['locations'][0]['locationsName']});
            this.setState({rain: data['records']['locations'][0]['location'][0]['weatherElement'][0]['time'][0]['elementValue'][0]['value']});
            this.setState({weather: data['records']['locations'][0]['location'][0]['weatherElement'][1]['time'][0]['elementValue'][0]['value']});
            this.setState({temperature: data['records']['locations'][0]['location'][0]['weatherElement'][2]['time'][0]['elementValue'][0]['value']});
        });
    }

    render(){
        let icon;
        if ( this.state.weather==='有雨' ){
            icon = 'cloud-rain';
        }else if ( this.state.weather==='多雲' ){
            icon = 'cloud';
        }else if ( this.state.weather==='晴' ){
            icon = 'sun';
        }else if ( this.state.weather==='陰' ){
            icon = 'cloud-sun';
        }
        return(
            <div className="card p-2">
                <h1 className="text-center">{(this.state.locationName===null)?"":this.state.locationName}</h1>
                <h1 className="text-center">
                    <FontAwesomeIcon icon={icon} />
                </h1>
                <h2>
                    降雨機率：{(this.state.rain===null)?"":this.state.rain + "%"}
                </h2>
                <h2>
                    體感溫度：{(this.state.temperature===null)?"":this.state.temperature+"度"}
                </h2>
            </div>
        );
    }
}

export {Card};