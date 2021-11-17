/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }

  const createTweetElement = function(data) {
    const name = data.user.name;
    const avatar = data.user.avatars;
    const userId = data.user.handle;
    const text = data.content.text;
    const date = timeago.format(data.created_at);


    let $tweet = `
        <article>
            <header>
              <span class="user-name"><img scr="${avatar}"> ${name}</span>
              <span class="user-id">${userId}</span>
            </header>
            <p><b>${text}</b></p>
            <footer>
              <span>${date}</span>
              <span class='icons'><i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></span>
            </footer>
        </article>
    `
    return $tweet;

  };
   

    const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});

