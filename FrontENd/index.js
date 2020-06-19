document.addEventListener("DOMContentLoaded", () => {
  console.log("One DOM Boi Loaded");
  fetch("http://localhost:3000/comments")
    .then(response => response.json())
    .then(result => handleCommentData(result));

  function handleCommentData(comments) {
    console.table(comments);
    comments.map(comment => {
      renderId(comment);
      renderComment(comment.content);
    });
  }

  function renderId(comment) {}

  function renderComment(comment) {
    const commentsContainer = document.querySelector("#commentsUl");
    const commentContent = document.createElement("li");
    commentContent.textContent = comment;
    commentsContainer.appendChild(commentContent);
  }

  const commentsForm = document.querySelector("#comments-form");
  commentsForm.addEventListener("submit", () => {
    event.preventDefault();
    getUserComment(commentsForm);
  });

  function getUserComment(commentsForm) {
    const newFormData = new FormData(commentsForm);
    const formComment = newFormData.get("comment");
    renderComment(formComment);
    sendUserComment(formComment);
    console.log(formComment);
  }

  function sendUserComment(comment) {}
});
