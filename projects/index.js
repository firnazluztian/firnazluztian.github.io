
function Greeter (props) {
    return (
        <h1>hello, {props.name}</h1>
    )
}

function App() {
    return(
        <Greeter name="kucing"/>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))