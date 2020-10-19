
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './index.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import MoreData from "./moreData";


//Class for displaying the data from API
class Datagathering extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data:[]
    };
  }
componentDidMount(){
  fetch("https://lgapi-us.libapps.com/1.1/guides?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6").then(res=>res.json()).then(
    result=>{
      this.setState({data:result});
    }
  )
  }
  render(){
    return (
      <div>
        <Table responsive="xl" id="myTable">
          <thead>
            <tr>
            <th>Id</th>
            <th>name</th>
            <th>Description</th>
            <th>Published</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Status Label</th>
            <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(r=>(
              <tr key = {r.id}>
                <td>{r.id} </td> 
                <td>{r.name}</td> 
                <td>{r.description}</td>  
                <td>{r.published}</td> 
                <td>{r.created}</td>  
                <td>{r.updated}</td>
                <td>{r.status_label}</td>
                <td><Link to = "/moreData"> More </Link></td>
                <Route path="/moreData" component={MoreData}></Route>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

ReactDOM.render(<BrowserRouter><Datagathering></Datagathering></BrowserRouter>,document.getElementById('root'));


//Function to Show the Search Bar and Button
function ShowSearch (){
return(<div>
  <label>SEARCH</label>
  <input  id='myInput' type='text'/>
  <Button id ="pri_button" variant="primary" onClick={SearchTable}>Primary</Button>{' '}
</div>);
}

//Function for searching the table 
function SearchTable() {
  var input, filter, found, table, tr, td, i, j;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
              found = true;
          }
      }
      if (found) {
          tr[i].style.display = "";
          found = false;
      } else {
          tr[i].style.display = "none";
      }
  }
}
const show = <ShowSearch></ShowSearch>;
ReactDOM.render(show,document.getElementById('search'));




// Function to fill the empty cells ! In Progress
function FillEmpty(){
  var  table, tr, td, i, j;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for(i=0;i<tr.length;i++){
    td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
        if(td[j].innerHTML.trim().length===0){
          td[j].innerHTML = "Null";
        }
  }
}  
}
export default FillEmpty
// const a = <FillEmpty></FillEmpty>;
// ReactDOM.render(a,);