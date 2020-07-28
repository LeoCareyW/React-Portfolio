class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of your computer.'
    const options = ['Thing1', 'Thing2', 'Thing4']


    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOptions />
      </div>
      )
  }
}



class Header extends React.Component {
  render() {
    return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button> Something Button </button>
      </div>)
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
        <Option />
      </div>
      )
    }
  }

  class Option extends React.Component {
    render() {
      return (
        <div>
          {this.props.optionText}
        </div>
        )
    }
  }

class AddOptions extends React.Component {
  render() {
    return (
      <div>
        <p>Add Options Component Here</p>
      </div>
      )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

