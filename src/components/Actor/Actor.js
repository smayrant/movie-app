import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../config';

class Actor extends Component {
    state = {
        actor: []
    }
    componentDidMount() {
        const actorId = this.props.match.params.actorId;
        // retrieve individual actor details
        fetch(`${API_URL}person/${actorId}?api_key=${API_KEY}&language=en-US`)
            .then(resp => resp.json())
            .then(data => this.setState({
                actor: data
            }))
    }
    render() {
        return (
            <div>
                {console.log(this.state.actor)}
            </div>
        );
    }
}

export default Actor;