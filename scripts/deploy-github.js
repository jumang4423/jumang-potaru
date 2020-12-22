const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/jumang4423/jumang-potaru.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)