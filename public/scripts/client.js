/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // Function to prevent unsafe tweets(XSS)
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function(tweets) {
    for (let tweet of tweets) {  // loops through tweets
      const $tweet = createTweetElement(tweet);   // calls createTweetElement for each tweet
      $('.tweet-container').prepend($tweet);    // takes return value and appends it to the tweets container
    }
  };


  // Create a function to create dynamically html elements
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
            <p><b>${escape(text)}</b></p>
            <footer>
              <span>${time}</span>
              <span class='icons'><i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i></span>
            </footer>
        </article>
    `
    return $tweet;

  };
  

  //Error handling with jQuery 
  const $errMsg = 


// Handle new tweet form submit
$("#tweetform").submit(function(event) {
  event.preventDefault();        //prevent submit event of its default behavior

  const $tweetText = $(event.target).serialize();
  // console.log('tweettest: ', $tweetText);
  const tweetCount = $tweetText.length - 5;
  
  
  if (tweetCount == 0) {
    return alert('Text is missing!')
  } else if (tweetCount > 140) {
    return alert('Please respect our limit of 140 characters!')
  }
  
  $.post('/tweets', $tweetText)   //send form data to server
    .then(() => {
    $('#tweet-text').val('');     //to put the curser back to begining
    $('.counter').text('140');
    $('#tweets-container').empty();
    loadTweets();
  })
  .catch(err => console.log("ERORR: ", err))

});


//Fetch tweets with AJAX
// get request to /tweets and receive array of JSON tweets
const loadTweets = () => {
  $.ajax('/tweets', {method: 'GET'})
  .then(renderTweets);
};





});





