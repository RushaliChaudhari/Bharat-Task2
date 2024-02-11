// Fetch blog posts from the server and render them
window.onload = function () {
    fetch("/api/posts")
    .then(response => response.json())
    .then(data => renderPosts(data))
    .catch(error => {
        console.error("Error fetching blog posts:", error);
        showErrorPage();
    });
};

function renderPosts(posts) {
    const blogPostsDiv = document.getElementById("blog-posts");
    posts.forEach(post => {
        const postLink = document.createElement("a");
        postLink.href = "/posts/" + post.id;
        postLink.textContent = post.title;
        blogPostsDiv.appendChild(postLink);
        blogPostsDiv.appendChild(document.createElement("br"));
    });
}

function showErrorPage() {
    // Redirect to the error page
    window.location.href = "/error.html";
}
