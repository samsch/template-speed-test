/** @jsx h */
const { h } = require('preact');
const renderToString = require('preact-render-to-string');

const App = ({ posts, asset }) => (
  <html>
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Post</title>
      {asset.js.map((path, index) => (
        <script src={path} key={index} />
      ))}
      {asset.css.map((path, index) => (
        <link rel="stylesheet" href={path} key={index} />
      ))}
    </head>
    <body>
      <div className="row mt-3 justify-content-center">
        <div className="col-md-8">
          {posts.map((post, index) => (
            <div key={index} className="card mt-3">
              <div className="card-body">
                <h1 className="card-title">{post.title}</h1>
                <p className="card-text">{post.post}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </body>
  </html>
);

module.exports = function render (props) {
  return '<!DOCTYPE html>' + renderToString(<App {...props} />);
}
