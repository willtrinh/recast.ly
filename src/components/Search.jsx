class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleSearch(event) {
    this.props.getYoutubeVideos(event.target.value);
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" placeholder="Search for videos..." value={this.state.query} onChange={this.handleSearch.bind(this)}/>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
