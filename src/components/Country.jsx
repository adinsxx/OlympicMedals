import React, {Component} from 'react';


class Country extends Component {
    state = {
        name: this.props.country.name,
        medal: this.props.country.medal,
    }

    addMedal = () => this.setState({medal: this.state.medal + 1});
    subtractMedal = () => this.setState({medal: this.state.medal - 1});


    render() {

        return (
            <div className='country'>
                <div className='name'>
                    {this.state.name}
                </div>
                <div className='medals'>
                    Gold Medals: {this.state.medal}
                    <button onClick={this.addMedal}>+</button>
                    <button disabled={this.state.medal===0} onClick={this.subtractMedal} >-</button>

                </div>
            </div>
        );
    }
}

export default Country;
