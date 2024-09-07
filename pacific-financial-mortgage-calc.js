class HelloWorld extends React.Component { constructor(props) {
    super(props);
    this.state = { personName:'Bill' }; }
    render() {
    return React.createElement('h1', null, 'Pacific Financial Mortgage Calculator by, ' + this.state.personName);
    } }

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(HelloWorld), domContainer);