const deletePostHandler = function(event) {
    event.preventDefault();
    console.log("clicked")
    const postId = document.getElementById('post-id')

    fetch("/api/post/" + postId.value, {
        method: "delete"
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}

document.querySelector("#delete-post-btn").addEventListener("click",deletePostHandler);