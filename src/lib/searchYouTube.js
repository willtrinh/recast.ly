import YOUTUBE_API_KEY from '../config/youtube.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', YOUTUBE_API_KEY);
});

// Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
// Accept an options object with the following properties:
// query - the string to search for
// max - the maximum number of videos to get, which should default to 5
// key - an authorized YouTube Browser API key
// only GET embeddable videos
var searchYouTube = ({key = YOUTUBE_API_KEY, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        console.log(items);
        callback(items);
      }
    })
    .fail(({response}) => {
      response.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTube;
