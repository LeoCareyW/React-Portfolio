console.log("App is running")

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of the computer',
  options: []
};

const emptyArray = () => {
  app.options = [];
  renderApp()
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum]
  alert(option);
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "There are no options" }</p>
      <button disabled={app.options.length < 1 ? true : false} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={emptyArray}>Remove Options</button>
      <ol>
      {
        app.options.map((todo) => <li key={todo}>{todo}</li>)
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>

    </div>
  );

  const appRoute = document.getElementById('app')
  ReactDOM.render(template, appRoute)
}

renderApp();
