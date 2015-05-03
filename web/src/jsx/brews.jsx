var Brew = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="Brew">
        <h2 className="BrewAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

var BrewList = React.createClass({
  render: function() {
    var brewNodes = this.props.data.map(function (brew) {
      return (
        <Brew author={brew.author}>
          {brew.text}
        </Brew>
      );
    });
    return (
      <div className="BrewList">
        {brewNodes}
      </div>
    );
  }
});

var BrewContainer = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadBrewsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadBrewsFromServer();
  },
  render: function() {
    return (
      <div className="BrewContainers">
        <h1>Brews</h1>
        <BrewList data={this.state.data} />
      </div>
    );
  }
});

var apiUrl = brewski.config.apiUrl;
var brewsUrl = apiUrl + "/api/brews"

React.render(
  <BrewContainer url={brewsUrl} />,
  document.getElementById('brews')
);