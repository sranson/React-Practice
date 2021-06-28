import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {

    state = { lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }), (err) => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        } else if (!this.state.errorMessage && this.state.lat) {
            return <div><SeasonDisplay lat={this.state.lat} /></div>
        } else {
            return <div><Spinner message={'Please accept location request...'}/></div>
        }
    }

    render() {
        return (
            <div className="testClass toAdd toAll views">
                {this.renderContent()};
            </div>
        )
    }
}



ReactDom.render(<App />, document.querySelector('#root'));