let visibility = false

const toggle = () => {
  visibility = !visibility
  renderPage();
};

const renderPage = () => {
const page = (
<div>
  <h1>Visibility Toggle</h1>
  <button onClick={toggle}>
    {visibility ? 'Hide details' : 'Show details'}
  </button>
    {visibility && (
      <p>Here are some details</p>
    )
  }
</div>
);

ReactDOM.render(page, document.getElementById('app'))


}

renderPage();
