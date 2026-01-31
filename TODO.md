# TODO: Implement Comment System for Blog

## Completed Tasks
- [x] Update comment form with ID and required attributes
- [x] Add loadComments function call in DOMContentLoaded
- [x] Implement loadComments function to fetch comments from API
- [x] Implement displayComments function to render comments
- [x] Implement form submission handler for posting comments
- [x] Fix "loadComments is not defined" error by adding function definitions

## Pending Tasks
- [x] Test the comment functionality by opening blog.html in browser
- [x] Verify that comments are displayed correctly
- [x] Verify that new comments can be posted successfully

## Notes
- GET API: https://portfolio-48mo.onrender.com/api/comments?blogId={blogId}
- POST API: https://portfolio-48mo.onrender.com/api/comments/create
- Form includes fields: name, email, website, message, blogId
