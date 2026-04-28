document.addEventListener('DOMContentLoaded', () => {
  let quotes = [["You become what you believe.", "- Oprah Winfrey"], ["Too many of us are not living our dreams because we are living our fears.", "- Les Brown"], ["If the wind will not serve, take to the oars.", "- Latin Proverb"], ["I would rather die of passion than of boredom.", "- Vincent van Gogh"], ["You take your life in your own hands, and what happens? A terrible thing, no one to blame.", "- Erica Jong"], ["When I let go of what I am, I become what I might be.", "- Lao Tzu"], ["The best revenge is massive success.", "- Frank Sinatra"], ["When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", "- Erma Bombeck"], ["If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.", "- Oprah Winfey"], ["The mind is everything. What you think you become.", "- Buddha"], ["Every strike brings me closer to the next home run.", "- Babe Ruth"], ["I have learned over the years that when one’s mind is made up, this diminishes fear.", "- Rosa Parks"], ["If you want to lift yourself up, lift up someone else.", "- Booker T. Washington"], ["A person who never made a mistake never tried anything new.", "- Albert Einstein"], ["If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", "- Vincent Van Gogh"]];
  let btn = document.getElementById("new-quote");
  const icons = document.querySelectorAll("#icon");
  const text = document.getElementById("quote");
  const author = document.getElementById("author");
  quote.textContent= "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”";
  author.textContent="― Bernard M. Baruch";
  quote.style.color= "pink";
  author.style.color= "pink";
  let index = 0;
  document.body.style.backgroundColor = "pink";
  icons.forEach(el => {
    el.style.color = "pink";
  });
  btn.style.backgroundColor = "pink";
  const colors = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#1a535c", "#ff9f1c"];
  btn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * colors.length);
    const rand = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[rand][0];
    author.textContent = quotes[rand][1];
    document.body.style.backgroundColor = colors[random];
    text.style.color = colors[random];
    author.style.color = colors[random];
    icons.forEach(el => {
      el.style.color = colors[random];
    });
    btn.style.backgroundColor = colors[random];
  });
});
