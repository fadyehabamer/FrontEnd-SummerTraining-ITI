import React from "react";
import { Link } from "react-router-dom";
import "./App.css"
export default class ListStd extends React.Component {

  state = {
    StudentsList: this.props.Students,
  };


  AddnewStudent = (newObject) => {
    this.state.StudentsList.push(newObject);
    this.setState({
      StudentsList: this.state.StudentsList,
    });
  };

  SaveDelete = (_postion) => {
    this.state.StudentsList.splice(_postion, 1);
    this.setState({
      StudentsList: this.state.StudentsList,
    });
  };

  SavingEdit = (newEditObject, idx) => {
    this.state.StudentsList.splice(idx, 1, newEditObject);
    this.setState({
      StudentsList: this.state.StudentsList,
    });
  };


  SortBySalary = () => {
    let newList = this.state.StudentsList.sort((a, b) => {
      return b.salary - a.salary;
    });
    this.setState({
      StudentsList: newList,
    });
  };

  FilterSalaryAbove = () => {
    let newList = this.state.StudentsList.filter((std) => std.salary > 2500);
    this.setState({
      StudentsList: newList,
    });
  };


  render() {
    return (
      <center>
      <h1>CRUD using React Router </h1>
      <div className="main">

        <div className="features">
          <Link
            className="add"
            to={{
              pathname: "/AddStudent",
              AddnewStudentRerefence: this.AddnewStudent,
            }}
          >
            Add newStudent
          </Link>



          <input
            type="button"
            value="Sort By Salary"
            onClick={() => this.SortBySalary()}
          />


          <input
            type="button"
            value="Filter above 2500"
            onClick={() => this.FilterSalaryAbove()}
          />
        </div>

        <br />

        <ul>
          {this.state.StudentsList.map((std, index) => {
            return (
              <li key={index}>
                <span>
                  Name:
                </span>
                {std.Name}

                <span>
                  Age:
                </span>
                {std.Age}
                <span>
                  salary :
                </span>
                {std.salary}
                <div className="ul-feat" >

                  <input className="delete"
                    type="button"
                    value="delete"
                    onClick={() => this.SaveDelete(index)}
                  />
                  <Link
                    className="edit"
                    to={{
                      pathname: "/EditStudent",
                      SavingEditRef: this.SavingEdit,
                      CurrentObject: std,
                      index,
                    }}
                  >
                    Edit
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      </center>
    );
  }
}
