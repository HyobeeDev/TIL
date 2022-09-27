const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET', NEWS_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function() {
console.log('ㅎㅐ시가 변경됨');
});

for(let i=0; i<10; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');

  a.href = 'a';
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;
  
  a.addEventListener('click', function() {});
  li.appendChild(a);
  ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);



