
import './App.css';
import React from 'react';

class App extends React.Component {
  
    state = {
      name: 'Stepan', 
      age: 20 , 
      nameState: false,
      showInfo: true
  }
 
  changeInfo = () => {
    this.setState({nameState: !this.state.nameState})
  }
   

   
  render(){
    const { showInfo } = this.state;

    return (

      // Changed only name and age 

      // <div>
      //  {this.state.nameState ? <h3>Name: Mykola Age: 30</h3> : <h3>Name: Stepan Age: 20</h3>}
      //   <button onClick={this.changeInfo}>
      //     Click here!
      //   </button>
      // </div>


      // Hide text and change button

    <div>
      <div style={{ display: (showInfo ? 'block' : 'none') }}> {this.state.nameState ? <h3>Name: Mykola Age: 30</h3> : <h3>Name: Stepan Age: 20</h3>}</div>
      <button onClick={() => {this.setState({ showInfo: !showInfo }); this.changeInfo()}}>{showInfo ? "Hide Info" : "Show Info"}</button>
    </div>  

    )
  }
}



export default App