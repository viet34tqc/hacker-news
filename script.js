const baseURL = "https://hn.algolia.com/api/v1/";

const Item = ({ item }) => {
  return (
    <li key={item.key}>
      <a href={item.url} title={item.title}>
        {item.title}
      </a>
    </li>
  );
};

class App extends React.Component {
  state = {
    list: []
  };

  onSubmit = e => {
    e.preventDefault();
    const query = this.getQueryFromInput();
    const result = this.doSearch(query);
    result.then(this.updateList);
  };

  updateList = list => {
    this.setState({
      ...this.state,
      list
    });
  };

  renderList = (item, key) => {
    return (
      <li key={key}>
        <a href={item.url}>{item.title}</a>
      </li>
    );
  };

  getQueryFromInput = () => {
    return document.getElementById("query").value;
  };

  doSearch = query => {
    const url = `${baseURL}search?query=${query}&hitsPerPage=10`;
    return fetch(url)
      .then(response => response.json())
      .then(response => response.hits);
  };

  removeOldList = () => {};

  render() {
    return (
      <div>
        <h1>Hacker'news</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" id="query" />
          <input type="submit" value="Search" />
        </form>

        <ul>
          {this.state.list.map(item => (
            <Item key={item.objectID} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
