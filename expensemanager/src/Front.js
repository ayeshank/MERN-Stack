import React from 'react';
import axios from 'axios';
const Todo=props=>(
    
    
      <tr>
        <th scope="row">{props.todo.product_id}</th>
        <td>{props.todo.d_caterer_id}</td>
        <td><img src={props.todo.image_path} style={{width:200,height:100}}/></td>
        <td>{props.todo.p_name}</td>
        <td>{props.todo.p_minamount}</td>
      </tr>


)
export default class Front extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            todos:[],
        };
    }
    componentDidMount(){
        axios.get('http://damp-headland-05751.herokuapp.com/show/products')
        .then(response=>{
            this.setState({todos:response.data});
            console.log(this.state.todos)
            
        })
        .catch(function(error){
            console.log(error);
        })
    }
    todolist() {
        return this.state.todos.map(function(data,i){
        return <Todo todo={data} key={i}/>;
        });
        
    }
    render(){
  return(
    <div>
         <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Caterer ID</th>
        <th scope="col">Image</th>
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
        </tr>
        </thead>
        <tbody>
        {this.todolist()}
        </tbody>
    </table>
    </div>  
    
  )
  }
}
