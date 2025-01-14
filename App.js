// const heading = React.createElement(
//   "h1",
//   { id: "abc" },
//   "Hello World from React"
// )

const parent = React.createElement(
  "div",
  {id:"parent"},
  [React.createElement(
    "div",
    { id: "child1" },
    [React.createElement("h1", { id: "heading" }, "I am h1 tag"),
    React.createElement("h2", { id: "heading" }, "I am h2 tag")
  ]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", { id: "heading" }, "I am h1 tag"),
    React.createElement("h2", { id: "heading" }, "I am h2 tag")
  ]
  )
]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root)

root.render(parent);