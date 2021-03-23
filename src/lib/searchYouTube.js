import YOUTUBE_API_KEY from '../config/youtube.js';
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', YOUTUBE_API_KEY);
});

var searchYouTube = ({key = YOUTUBE_API_KEY, query = 'cats', max = 8}, callback) => {
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
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
};

export default searchYouTube;
