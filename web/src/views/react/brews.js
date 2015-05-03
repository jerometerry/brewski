var BrewList = React.createClass({displayName: "BrewList",
  render: function() {
    var brewNodes = this.props.data.map(function (brew) {
      return (
        React.createElement(Brew, {author: brew.author}, 
          brew.text
        )
      );
    });
    return (
      React.createElement("div", {className: "BrewList"}, 
        brewNodes
      )
    );
  }
});

var BrewForm = React.createClass({displayName: "BrewForm",
  render: function() {
    return (
      React.createElement("div", {className: "BrewForm"}, 
        "Hello, world! I am a BrewForm."
      )
    );
  }
});

var BrewBox = React.createClass({displayName: "BrewBox",
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
      React.createElement("div", {className: "BrewBox"}, 
        React.createElement("h1", null, "Brews"), 
        React.createElement(BrewList, {data: this.state.data}), 
        React.createElement(BrewForm, null)
      )
    );
  }
});

var Brew = React.createClass({displayName: "Brew",
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      React.createElement("div", {className: "Brew"}, 
        React.createElement("h2", {className: "BrewAuthor"}, 
          this.props.author
        ), 
        React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
      )
    );
  }
});

var apiUrl = brewski.config.apiUrl;
var brewsUrl = apiUrl + "/api/brews"
React.render(
  React.createElement(BrewBox, {url: brewsUrl}),
  document.getElementById('brews')
);