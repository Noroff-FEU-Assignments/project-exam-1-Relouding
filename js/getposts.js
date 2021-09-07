const baseUrl = "https://wordpress.relouding.eu/wp-json/wp/v2/posts"
const productContainer = document.querySelector(".container-posts")


async function getBlogPosts(url){
    const response = await fetch(url);
    const posts = await response.json();

    posts.forEach(function(post){
        productContainer.innerHTML += `
        <div class="blog-posts">
        <div><h2>${post.title.rendered}</h2></div>
        <div><p>${post.content.rendered}</p></div>
        <div><a href="blogspecific.html?id=${post.id}">read more</a>
        </div>
        `
    })
}

getBlogPosts(baseUrl);
