import React from 'react';
import Medal from './Medal';


const Country = (props) => {
    const {country, medals, onIncrement, onDecrement, onDelete} = props;

    const getTotals = (country, medals) => {
        let sum = 0;
        medals.forEach(medal => {
            sum += country[medal.name];
        });
        return sum;
    }


    return (
        <div className='country'>
            <div className='name'>
                {country.name}
                <span className='badge'>
                    {getTotals(country, medals)}
                </span>
            </div>
            {medals.map(medal =>
                <Medal
                    key={medal.id}
                    country={country}
                    medal={medal}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                />
            )}
            <button onClick={() => onDelete(country.id)}>Delete</button>

            <hr/>
        </div>
    );
}

export default Country;
