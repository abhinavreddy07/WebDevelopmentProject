
import React from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

class More extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
        newdata:[]
      };
    }
  componentDidMount(){
    fetch("https://lgapi-us.libapps.com/1.1/guides?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6").then(res=>res.json()).then(
      result=>{
        this.setState({newdata:result});
      }
    )
    }
    render(){
      return (
        <div>
          <Table responsive="xl" id="myTable">
            <thead>
              <tr>
              <th>Created</th>
              <th>Updated</th>
              <th>Status Label</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.newdata.map(r=>(
                <tr key = {r.id}>
                  <td>{r.created}</td>  
                  <td>{r.updated}</td>
                  <td>{r.status_label}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          
        </div>
      );
    }
  }
  export default More