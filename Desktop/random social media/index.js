// Function to display posts
function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    // Clear existing content (important for refreshes)
    postList.innerHTML = "";

    // Loop through posts
    posts.forEach(post => {
        // Create elements
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        // Add content
        h1.textContent = post.title;
        p.textContent = post.body;

        // Append elements
        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}


// Async function to fetch posts
async function fetchPosts() {
    try {
        // Fetch data from API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        // Convert to JSON
        const data = await response.json();

        // Display posts
        displayPosts(data);

    } catch (error) {
        console.error("Error fetching postfetch:", error);
    }
}

// Call function
fetchPosts();