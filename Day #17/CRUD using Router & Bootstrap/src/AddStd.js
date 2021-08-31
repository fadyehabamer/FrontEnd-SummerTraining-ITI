import React from "react";
import {InputGroup,FormControl} from  'react-bootstrap'
export default class AddStd extends React.Component {
  state = {
    Id: "",
    Name: "",
    Age: "",
    Address: "",
    salary: ""
  };

  SavingAdd = () => {
    alert("Backing");
    this.props.history.push("/List");
  };
  CustomAdd = () => {
    let newStd = {
      id: this.state.Id,
      Name: this.state.Name,
      Age: this.state.Age,
      Address: this.state.Address,
      salary: this.state.salary
    };
    this.props.location.AddnewStudentRerefence(newStd);
    this.props.history.push("/List");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="form" >
              <center>
                <h1>
                  Add New Employee
                </h1>
              </center>

              {/* <input
                placeholder="ID"
                type="text"
                value={this.state.Id}
                onChange={(e) =>
                  this.setState({
                    Id: e.target.value,
                  })
                }
              /> */}

              <br />

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  placeholder="ID"
                  value={this.state.Id}
                  onChange={(e) =>
                  this.setState({
                    Id: e.target.value,
                  })
                }
                  aria-label="ID"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>


              <br />

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  placeholder="Name"
                  value={this.state.Name}
                  onChange={(e) =>
                  this.setState({
                    Name: e.target.value,
                  })
                }
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>


              <br />



              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  placeholder="Age"
                  value={this.state.Age}
                  onChange={(e) =>
                  this.setState({
                    Age: e.target.value,
                  })
                }
                  aria-label="Age"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>


              <br />




              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  placeholder="Address"
                  value={this.state.Address}
                  onChange={(e) =>
                  this.setState({
                    Address: e.target.value,
                  })
                }
                  aria-label="ID"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>


              <br />





              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  placeholder="Salary"
                  value={this.state.salary}
                  onChange={(e) =>
                  this.setState({
                    salary: e.target.value,
                  })
                }
                  aria-label="Salary"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>


              <br />



              {/* <input
                placeholder="Name"
                value={this.state.Name}
                type="text"
                onChange={(e) =>
                  this.setState({
                    Name: e.target.value,
                  })
                }
              />

              <br />
              <input
                placeholder="Age"
                type="text"
                value={this.state.Age}
                onChange={(e) =>
                  this.setState({
                    Age: e.target.value,
                  })
                }
              />

              <br />
              <input
                placeholder="Address"
                type="text"
                value={this.state.Address}
                onChange={(e) =>
                  this.setState({
                    Address: e.target.value,
                  })
                }
              />

              <br />

              <input
                placeholder="Salary"
                type="text"
                value={this.state.salary}
                onChange={(e) =>
                  this.setState({
                    salary: e.target.value,
                  })
                }
              /> */}


              <br />
              <div className="add-features">
                <input className="cancel-btn" type="button" onClick={this.SavingAdd} value="Cancel" />

                <input className="add-btn"
                  type="button"
                  value="Add"
                  onClick={this.CustomAdd}

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
