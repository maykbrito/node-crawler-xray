const x = require('x-ray')()
const url = "https://news.ycombinator.com/"

x(url, '.athing', [{
  title: '.title a',
  link: '.title a@href'
}])
.paginate('a.morelink@href')
.limit(3)
.write('results.json')