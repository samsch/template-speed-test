/** @jsx h */
const h = require('hyperscript');

const App = ({ posts, asset }) => h(
  "html",
  null,
  h(
    "head",
    null,
    h("meta", { charset: "UTF-8" }),
    h("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
    h("meta", { "http-equiv": "X-UA-Compatible", content: "ie=edge" }),
    h(
      "title",
      null,
      "Post"
    ),
    asset.js.map(path => h("script", { src: path })),
    asset.css.map(path => h("link", { rel: "stylesheet", href: path }))
  ),
  h(
    "body",
    null,
    h(
      "div",
      { "class": "row mt-3 justify-content-center" },
      h(
        "div",
        { "class": "col-md-8" },
        posts.map(post => h(
          "div",
          { "class": "card mt-3" },
          h(
            "div",
            { "class": "card-body" },
            h(
              "h1",
              { "class": "card-title" },
              post.title
            ),
            h(
              "p",
              { "class": "card-text" },
              post.post
            )
          )
        ))
      )
    )
  )
);

module.exports = function render(props) {
  return '<!DOCTYPE html>' + App(props).outerHTML;
};