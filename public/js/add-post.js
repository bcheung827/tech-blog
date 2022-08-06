const newPostForm = document.getElementById("new-post-form")

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-body"]').value;

  const response = await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};
newPostForm.addEventListener('submit', newFormHandler);
