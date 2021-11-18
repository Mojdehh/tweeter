/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1581116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


$(document).ready(function() {

  const renderTweets = function(tweets) {
    
    for (let tweet of tweets) {  // loops through tweets
      const $tweet = createTweetElement(tweet);   // calls createTweetElement for each tweet
      $('.tweet-container').append($tweet);    // takes return value and appends it to the tweets container
    }

  };


  const createTweetElement = function(tweets) {
    const name = tweets.user.name;
    const avatar = tweets.user.avatars;
    const userId = tweets.user.handle;
    const text = tweets.content.text;
    const time = timeago.format(tweets.created_at);


    let $tweet = `
        <article>
            <header>
              <div>
                <span><img class="avatar" src=${avatar}></span>
                <span class="user-name">${name}</span>
              </div>
                <span class="user-id">${userId}</span>
            </header>
            <p><b>${text}</b></p>
            <footer>
              <span>${time}</span>
              <span class='icons'><i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></span>
            </footer>
        </article>
    `
    return $tweet;

  };
   

  renderTweets(data);
// const $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('.tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});

