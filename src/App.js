const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h1', {}, props.animal),
        React.createElement('h1', {}, props.breed)
    ]);
}

class App extends React.Component {
    handleTitleClick() {
        alert("You clicked the title");
    }
    render() {
        return React.createElement('div', {},
            React.createElement('h1', { onClick: this.handleTitleClick }, 'Adopt Me!'),
            React.createElement(Pet, {
                name: "Snoopy",
                animal: "Dog",
                breed: "Pomeranian"
            }),
            React.createElement(Pet, {
                name: "Pepper",
                animal: "Dog",
                breed: "something"
            }),
            React.createElement(Pet, {
                name: "Charlie",
                animal: "Fish",
                breed: "Beta"
            })
        );
    };
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));