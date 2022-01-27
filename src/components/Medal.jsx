import React, {Component} from 'react';

class Medal extends Component {
    state = {}
    render() {
        const {medal, country, onAdd, onSubtract} = this.props;
        return (
            <div className="medals">
                {medal.name} Medals: {country[medal.name]}
                <button onClick={()=>onAdd(country.id, medal.name)}>+</button>
                <button disabled={country[medal.name]===0} onClick={()=> onSubtract(country.id, medal.name)}>-</button>
            </div>
        );
    }
}

export default Medal;