class Visibility extends React.Component {
  constructor(props) {
    super(props)
      this.toggle = this.toggle.bind(this)
      this.state = {
        visibility: false
      }
  }

  toggle() {
    this.setState((prevState) => {
      return {
        visibility: !this.state.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggle}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
          {this.state.visibility && (
            <p>Here are some details</p>
          )
        }
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))




