import React,{Component} from 'react';
import '../shared/css/login.css';
import { useHistory } from "react-router-dom";
class LoginScreen extends Component {
  state={ 
        email:'',
        password:'',
        loading: false,  
      }

  async componentDidMount(){
        
  }
  goToDashboard(){
    this.props.history.push('/dashboard')

  }
 
render(){
  return (

  <div className="App">
    <div className="paycontainer">
     <div className="item">
      <div className="overlay-effect"></div>
     
    
    </div>
    <div className="checkout">
      <div className="checkout-form">
        <div className="checkout-field">
          <label>Email</label>
          <input
            type="text"
            id="email"
            onChange={(email) => this.setState({email:email})}
          />
        </div>

        <div className="checkout-field">
          <label>Password</label>
          <input
           type="password"
           id="phone"
           onChange={(phone) => this.setState({phone:phone})}
        
          />
        </div>
       <button className="btn"  onClick={() => this.goToDashboard()}>Login</button>
    
      </div>
    </div>
  </div>
</div>
)}}
  export default LoginScreen;