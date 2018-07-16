const React = require('react');
const ReactDOMServer = require('react-dom/server');

const App = ({ posts, asset }) => React.createElement(
  'html',
  null,
  React.createElement(
    'head',
    null,
    React.createElement('meta', { charSet: 'UTF-8' }),
    React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
    React.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'ie=edge' }),
    React.createElement(
      'title',
      null,
      'Post'
    ),
    asset.js.map((path, index) => React.createElement('script', { src: path, key: index })),
    asset.css.map((path, index) => React.createElement('link', { rel: 'stylesheet', href: path, key: index }))
  ),
  React.createElement(
    'body',
    null,
    React.createElement(
      'div',
      { className: 'row mt-3 justify-content-center' },
      React.createElement(
        'div',
        { className: 'col-md-8' },
        posts.map((post, index) => React.createElement(
          'div',
          { key: index, className: 'card mt-3' },
          React.createElement(
            'div',
            { className: 'card-body' },
            React.createElement(
              'h1',
              { className: 'card-title' },
              post.title
            ),
            React.createElement(
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
  return '<!DOCTYPE html>' + ReactDOMServer.renderToString(React.createElement(App, props));
};