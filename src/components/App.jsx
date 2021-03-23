import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
// import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
// import searchYouTube from '/compiled/src/lib/searchYouTube.js';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: null
    };

    this.getYoutubeVideos = this.getYoutubeVideos.bind(this);
  }

  componentDidMount() {
    this.getYoutubeVideos('cats');
  }

  getYoutubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    // this.props.searchYouTube(options, (videos) => this.setState({
    //   videos: videos,
    //   currentVideo: videos[0]
    // }));
  }


  videoTitleClick(video) {
    this.setState({currentVideo: video});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
            <Search getYoutubeVideos={this.getYoutubeVideos} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> view goes here!</h5></div>
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> view goes here!</h5></div>
            <VideoList videos={this.state.videos} videoTitleClick={this.videoTitleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
