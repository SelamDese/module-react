import React, { Component } from 'react'


export default class LocationList  extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                      <p>{location.name}</p>  
                        <p>{location.address}</p>
                        <a
                            href="#"
                            onClick={() => this.props.deleteLocation(location.id)}
                            >
                            Delete
                        </a>
                    </div>
                )
            }
            </section>
        );
    }
}