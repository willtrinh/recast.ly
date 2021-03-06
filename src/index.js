import App from './components/App.js';
import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
import YOUTUBE_API_KEY from './config/youtube.js';

ReactDOM.render(<App API_KEY={YOUTUBE_API_KEY}/>, document.getElementById('app'));