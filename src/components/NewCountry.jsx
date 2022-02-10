import React, {useEffect, useState } from 'react';

// export class NewCountry extends Component {


//     togglePrompt = () =>{
//       //triggers prompt box
//       const name = prompt('Enter country name');
//       if (name && name.trim().length > 0){
//           this.props.onAdd(name);
//       }
//     }


//   render() {
//     return (
//     <div className='newCountryButton'>
//       <button onClick={this.togglePrompt}>Add Country</button>
//     </div>
//     );
//   }
// }



const NewCountry = (props) => {
  // const togglePrompt = () =>{
  //          //triggers prompt box
  //          const name = prompt('Enter country name');
  //          if (name && name.trim().length > 0){
  //              this.props.onAdd(name);
  //          }
  //        }
  const [showPrompt, setShowPrompt] = useState(false);
  const [newCountry, setNewCountry] = useState('');
  return (
    <div className='newCountryButton'>
      <button>Add Country</button>
    </div>  )
}


export default NewCountry;
