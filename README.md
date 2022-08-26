# ML Tech Task

In this tech assessment, your task will be to implement functionality for a multi-tenanted, web-based, task list application. The application uses javascript, fastify (https://www.fastify.io/) as the web framework, jwt as the authentication method, and MongoDB as the database.

We have provided the application skeleton in which you will implement the following:

1. CRUD apis and logic for task lists. All operations should persist or read data from the MongoDB instance
    - Create a task for a logged in user, append it to their list of tasks
    - Read the all the task lists that are associated with the organisation the user is in
    - Update a task in the list for the logged in user. Users can only update tasks that they own
    - Delete tasks from the list for the logged in user
2. A web frontend using a javascript library or framework of your choosing. The web frontend should contain:
    - A login screen that takes a jwt token (from the below table)
    - Ability for a logged in user to view all the tasks for the organisation that they are in
    - Ability for users to perform Create, Update, Delete operations on only tasks that they own
    - A session timeout that logs the user out after 1 minute of inactivity
3. Implement rate limiting on the API calls with the use of https://github.com/fastify/fastify-rate-limit . With the limit being 1 API call per second
4. **EXTENSION TASK:** Implement fastify-swagger (https://github.com/fastify/fastify-swagger) for the APIs that you implement

To run use `npm ci` for installation

Organisation | Name | Token
---|---|---
org-a | John Doe | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwib3JnIjoib3JnLWEiLCJpYXQiOjE2NjE0ODA5Mzd9.x5p9ea8_6tYBQKTO15xmn3fyTtWGp88yNjeldVxhzp0
org-a | Jane Doe | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOTg3NjU0MzIxIiwibmFtZSI6IkphbmUgRG9lIiwib3JnIjoib3JnLWEiLCJpYXQiOjE2NjE0ODA5Mzd9.V_JoeYqrroauCmYIurYIVvvhT2ZUd97FdbLUdSOxEuo
org-b | Jim Dow | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTA5ODc2IiwibmFtZSI6IkppbSBEb3ciLCJvcmciOiJvcmctYiIsImlhdCI6MTY2MTQ4MDkzN30.M5qdMkdJtKw0NPW-VGzIoEz69yQXQdfD7y-BSsxBnZ0
