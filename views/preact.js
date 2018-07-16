/** @jsx h */
const { h } = require('preact');
const renderToString = require('preact-render-to-string');

const App = ({ posts, asset }) => h(
  'html',
  null,
  h(
    'head',
    null,
    h('meta', { charSet: 'UTF-8' }),
    h('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
    h('meta', { httpEquiv: 'X-UA-Compatible', content: 'ie=edge' }),
    h(
      'title',
      null,
      'Post'
    ),
    asset.js.map((path, index) => h('script', { src: path, key: index })),
    asset.css.map((path, index) => h('link', { rel: 'stylesheet', href: path, key: index }))
  ),
  h(
    'body',
    null,
    h(
      'div',
      { className: 'row mt-3 justify-content-center' },
      h(
        'div',
        { className: 'col-md-8' },
        posts.map((post, index) => h(
          'div',
          { key: index, className: 'card mt-3' },
          h(
            'div',
            { className: 'card-body' },
            h(
              'h1',
              { className: 'card-title' },
              post.title
            ),
            h(
              'p',
              { className: 'card-text' },
              post.post
            )
          )
        ))
      )
    )
  )
);

module.exports = function render(props) {
  return '<!DOCTYPE html>' + renderToString(h(App, props));
};