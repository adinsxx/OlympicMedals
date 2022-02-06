import React, {Component} from 'react';
import Medal from './Medal';


class Country extends Component {
    // state = {
    //     name: this.props.country.name,
    //     gold: this.props.country.gold,
    // }

    // addMedal = () => this.setState({gold: this.state.gold + 1});
    // subtractMedal = () => this.setState({gold: this.state.gold - 1});

    getTotals(country, medals){
        let sum = 0;
        medals.forEach(medal => {sum += country[medal.name];});
        return sum;
    }



    render() {
        const {country, medals, onIncrement, onSubtract, onDelete} = this.props;
        return (
            <div className='country'>
                <div className='name'>
                {country.name}
                <span className='badge'>
                    {this.getTotals(country, medals)}
                </span>
                </div>
                { medals.map(medal => 
                <Medal
                    key={medal.id}
                    country={country}
                    medal={medal}
                    onIncrement={onIncrement}
                    onSubtract={onSubtract}
                />
                )}
                <button onClick={() => onDelete(country.id)}>Delete</button>

                <hr/>
            </div>
        );
    }
}

export default Country;
