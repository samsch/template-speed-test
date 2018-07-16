/** @jsx h */
const h = require('hyperscript');

const App = ({ posts, asset }) => (
  <html>
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Post</title>
      {asset.js.map(path => (
        <script src={path} />
      ))}
      {asset.css.map(path => (
        <link rel="stylesheet" href={path} />
      ))}
    </head>
    <body>
      <div class="row mt-3 justify-content-center">
        <div class="col-md-8">
          {posts.map(post => (
            <div class="card mt-3">
              <div class="card-body">
                <h1 class="card-title">{post.title}</h1>
                <p class="card-text">{post.post}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </body>
  </html>
);

module.exports = function render (props) {
  return '<!DOCTYPE html>' + App(props).outerHTML;
}
