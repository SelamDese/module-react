import React, { Component } from "react";
import "./Animal.css";

export default class AnimalList extends Component {
  render() {
    return (
      <section className="animals">
        {this.props.animals.map(animal => (
          <div key={animal.id} className="card">
                {animal.name}
                <a
                  href="#"
                  onClick={() => this.props.deleteAnimal(animal.id)}
                  className="card-link"
                >
                  Delete
                </a>
          </div>
        ))}
      </section>
    );
  }
}