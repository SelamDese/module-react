import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalManager from "../modules/AnimalManager";
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from "../modules/OwnerManager"

export default class ApplicationViews extends Component {
    state = {
      animals: [],
      employees: [],
      locations:[],
      owners:[]
    }
    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
          method: "DELETE"
        })
          .then(response => response.json())
          .then(() => fetch(`http://localhost:5002/animals`))
          .then(response => response.json())
          .then(animals =>
            this.setState({
              animals: animals
            })
          );
      };

      deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
          method: "DELETE"
        })
          .then(response => response.json())
          .then(() => fetch(`http://localhost:5002/employees`))
          .then(response => response.json())
          .then(employees =>
            this.setState({
                employees: employees
            })
          );
      };

      deleteLocation = id => {
        return fetch(`http://localhost:5002/locations/${id}`, {
          method: "DELETE"
        })
          .then(response => response.json())
          .then(() => fetch(`http://localhost:5002/locations`))
          .then(response => response.json())
          .then(locations =>
            this.setState({
                locations: locations
            })
          );
      };

      deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
          method: "DELETE"
        })
          .then(response => response.json())
          .then(() => fetch(`http://localhost:5002/owners`))
          .then(response => response.json())
          .then(owners =>
            this.setState({
                owners: owners
            })
          );
      };

      componentDidMount() {
        AnimalManager.getAll()
        .then(allAnimals => {
          this.setState({ animals: allAnimals });
        });

        EmployeeManager.getAll()
        .then(allEmployees => {
          this.setState({ employees: allEmployees });
        });

        LocationManager.getAll()
        .then(allLocations => {
          this.setState({ locations: allLocations });
        });

        OwnerManager.getAll()
        .then(allOwner => {
          this.setState({ owners: allOwner });
        });
      }
    
      render() {
        return (
          <React.Fragment>
            <Route exact path="/"
              render={props => {
                return (<LocationList deleteLocation={this.deleteLocation} locations={this.state.locations} />);
              }}
            />
            <Route exact path="/animals"
              render={props => {
                return ( <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} /> );
              }}
            />
            <Route exact path="/employees"
              render={props => {
                return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />;
              }}
            />
            <Route exact path="/owners"
              render={props => {
                return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />;
              }}
            />
          </React.Fragment>
        );
      }
}
