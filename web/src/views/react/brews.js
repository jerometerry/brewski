var Brew = React.createClass({displayName: "Brew",
  render: function() {
    return (
      React.createElement("div", {className: "Brew"}, 
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

var BrewList = React.createClass({displayName: "BrewList",
  render: function() {
    var brewNodes = this.props.data.map(function (brew) {
      return (
        React.createElement(Brew, {name: brew.name, brewery: brew.brewery, style: brew.style})
      );
    });
    return (
      React.createElement("div", {className: "BrewList"}, 
        brewNodes
      )
    );
  }
});

var BrewContainer = React.createClass({displayName: "BrewContainer",
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
      React.createElement("div", {className: "BrewContainers"}, 
        React.createElement("h1", null, "Brews"), 
        React.createElement(BrewList, {data: this.state.data})
      )
    );
  }
});

var apiUrl = brewski.config.apiUrl;
var brewsUrl = apiUrl + "/api/brews"

React.render(
  React.createElement(BrewContainer, {url: brewsUrl}),
  document.getElementById('brews')
);