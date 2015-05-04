var Beer = React.createClass({displayName: "Beer",
  render: function() {
    return (
      React.createElement("div", {className: "Beer"}, 
        React.createElement("h2", null, 
          this.props.name
        ), 
        React.createElement("h3", null, 
          this.props.brewery
        ), 
        React.createElement("span", null, 
          this.props.style
        )
      )
    );
  }
});

var BeerList = React.createClass({displayName: "BeerList",
  render: function() {
    var beerNodes = this.props.data.map(function (beer) {
      return (
        React.createElement(Beer, {name: beer.name, brewery: beer.brewery, style: beer.style})
      );
    });
    return (
      React.createElement("div", {className: "BeerList"}, 
        beerNodes
      )
    );
  }
});

var BeerContainer = React.createClass({displayName: "BeerContainer",
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
      React.createElement("div", {className: "BeerContainers"}, 
        React.createElement("h1", null, "Beers"), 
        React.createElement(BeerList, {data: this.state.data})
      )
    );
  }
});

var apiUrl = brewski.config.apiUrl;
var beersUrl = apiUrl + "/api/beers"

React.render(
  React.createElement(BeerContainer, {url: beersUrl}),
  document.getElementById('beers')
);