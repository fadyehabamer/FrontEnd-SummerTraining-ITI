import React from 'react'
import axios from 'axios'
export default class App extends React.Component {
  state = {
    empList: null,
    id: "",
    name: "",
    dept: "",
    salary: ""
  }
  componentDidMount() {
    this.getInfo()
  }

  getInfo = () => {
    axios("http://localhost:3000/Employees")
      .then(res => {
        this.setState({
          empList: res.data
        })
        console.log(res.data)
      }
      )
  }

  addEmp = () => {

    let newEmp = {
      "id": this.state.id,
      "name": this.state.name,
      "dept": this.state.dept,
      "salary": this.state.salary
    }

    axios.post("http://localhost:3000/Employees", newEmp).then(res => {
      this.getInfo()
    })
  }

  removeEmp = (id) => {
    axios.delete(`http://localhost:3000/Employees/${id}`).then(res => {
      console.log(res.data)
      this.getInfo()
    })

  }

  // EditEmp = (id, EditObject) => {
  //   axios.put(`http://localhost:3000/students/${id}`, EditObject)
  //     .then(res => {
  //       console.log(res);
  //       this.getInfo();
  //     }).catch(Error => {
  //       console.log(Error);
  //     })

  // }



  render() {
    if (!this.state.empList) {
      return (
        <div className="container" >
          <div className="row" >
            <div className="col-12" >
              <h1> Loading Data .... </h1>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="container" >
          <div className="row" >
            <div className="col" >
              <h1 className="mt-5 mb-5 text-center"> CRUD Rest API </h1>
              <table className="mb-5 table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Department</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Delete</th>
                    {/* <th scope="col">Edit</th> */}
                  </tr>
                </thead>
                <tbody>

                  {
                    this.state.empList.map((emp, idx) => {
                      return (
                        <tr>
                          <th scope="row">{idx + 1}</th>
                          <td>{emp.name}</td>
                          <td>{emp.dept}</td>
                          <td>{emp.salary}</td>
                          <td> <button type="button" class="btn btn-outline-danger" onClick={() => this.removeEmp(emp.id)}>Delete Employee</button> </td>
                          {/* <td> <button type="button" class="btn btn-outline-success" onClick={() => this.EditEmp(emp.id, emp)}>Edit Employee</button> </td> */}
                        </tr>
                      )


                    })
                  }

                </tbody>
              </table>

              <div className="row" >
                <div className="col">
                  <h1 className="text-center mt-5 mb-5 " >
                    Add New Employee
                  </h1>

                  <input type="text" class="form-control mb-3" placeholder="ID" aria-describedby="basic-addon1"
                    value={this.state.id}
                    onChange={
                      (e) => this.setState({
                        id: e.target.value
                      })
                    }
                  />
                  <input type="text" class="form-control mb-3" placeholder="Name" aria-describedby="basic-addon1"
                    value={this.state.name}
                    onChange={
                      (e) => this.setState({
                        name: e.target.value
                      })
                    }
                  />
                  <input type="text" class="form-control mb-3" placeholder="Dept" aria-describedby="basic-addon1"
                    value={this.state.dept}
                    onChange={
                      (e) => this.setState({
                        dept: e.target.value
                      })
                    }

                  />
                  <input type="text" class="form-control mb-3" placeholder="Salary" aria-describedby="basic-addon1"
                    value={this.state.salary}
                    onChange={
                      (e) => this.setState({
                        salary: e.target.value
                      })
                    }
                  />
                  {/* <button type="button" onClick={this.addEmp()} className="btn btn-success btn-lg btn-block mb-4 mt-4">Add New Employee</button> */}



                </div>
              </div>

            </div>
          </div>
        </div>
      )
    }



  }
}