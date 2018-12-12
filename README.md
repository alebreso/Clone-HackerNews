# Clone-HackerNews

In this repository:<br>

GraphQL full-stack clone of https://news.ycombinator.com/ <br>

GraphQL server based on Node.js, graphql-yoga, prisma and prisma-binding <br>
Authentication with jsonwebtoken, bcrypt <br>
Pagination, Sorting, Filtering and subsriptions are implemented <br>
<br>
-Yarn install (install all dependencies) <br>
-Yarn start (run server) <br>
-Yarn pg (run graphQL Playground) <br>

GraphQL client based on react, react-router, react-apollo, apollo, apollo-link and graphQL <br>
Authentication with jsonwebtoken, bcrypt <br>
Pagination, Sorting, Filtering and subsriptions are implemented <br>
<br>
-Yarn install (install all dependencies) <br>
-Yarn start (run client) <br>


This app you can: <br>
- Create a new User <br>
- Create a new Link ( user need to be login ) <br>
- Vote links( you can vote once per link ) <br>
- Subscribe to new links and votes through web-socket <br>
- Search links through their url or description <br>
