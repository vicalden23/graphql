var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String,
    bye: Int,
    jk: String
  }
`);

var root = {
  hello: () => {
    return 'Hello world!';
  },
  bye: () => {
    return 10000;
  },
  jk: () => {
    return 'Just kidding!';
  },
}

graphql(schema, '{jk}', root).then((response) => {
  console.log(response);
});