import React,{Component} from 'react';
import '../shared/css/dashboard.css';
import {GET_SERVICE} from "../shared/backend";
// import { PaystackButton } from 'react-paystack'

class DasboardScreen extends Component {
  state={ 
    products:[],
    loading: false,  
 }

      
  async componentDidMount(){
    this.getProduct()
   }

   async getProduct(){
    const endpoint = `/products`;
    console.log('endpoint',endpoint)
    this.setState({ loading:true});
      try {
        const response = await GET_SERVICE(endpoint);
        console.log('Products', response);
        this.setState({loading:false});
        if(response.status===200)
           {
            this.setState({products:response.data})
           }
        else
          {
            console.log('error',response.error)
          }
          }
        catch (e) {
            this.setState({loading:false});
            return e.response;
            }
     };

  
  render(){

    return (   
        <div className="container">
          {this.state.products.map(product =>
           <div key={product.id} className="row" > 
             <div className="box">
               <div className="imgdiv">
                 <img src={product.image} className="image" alt={product.description}/> 
                </div>

              <div className="details">
                <div className="name">{product.title}</div>
                <div className="amount">₦{product.price}</div>
              </div>
             </div>
             </div>
            )} 
       </div>
);
}};
  export default DasboardScreen;