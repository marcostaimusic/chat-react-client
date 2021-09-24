import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            room: {
              room: 'loading',
              messages: 'loading'
            }
        }
    }
    
    componentDidMount() {
        fetch("http://localhost:5000/rooms/614cb119d8c30007432576ac")
            .then(response => response.json())
            // .then(data=>console.log(data))
            .then(data => {
                this.setState({
                    room: data
                })
                // console.log(this.state.room.room.name)
                console.log(this.state.room.messages[0].text)
            })
    }
    
    render() {
        return (
            <div>
                {this.state.room.messages[0].text}
            </div>
        )
    }
}

export default App
