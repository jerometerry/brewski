var Beer = React.createClass({
  render: function() {
    return (
      <div className="Beer">
        <h2>
          {this.props.name}
        </h2>
        <h3>
          {this.props.brewery}
        </h3>
        <span>
          {this.props.style}
        </span>
      </div>
    );
  }
});

var BeerList = React.createClass({
  render: function() {
    var beerNodes = this.props.data.map(function (beer) {
      return (
        <Beer name={beer.name} brewery={beer.brewery} style={beer.style}></Beer>
      );
    });
    return (
      <div className="BeerList">
        {beerNodes}
      </div>
    );
  }
});

var BeerContainer = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadBeersFromServer: function() {
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
    this.loadBeersFromServer();
  },
  render: function() {
    return (
      <div className="BeerContainers">
        <h1>Beers</h1>
        <BeerList data={this.state.data} />
      </div>
    );
  }
});

var apiUrl = brewski.config.apiUrl;
var beersUrl = apiUrl + "/api/beers"

React.render(
  <BeerContainer url={beersUrl} />,
  document.getElementById('beers')
);