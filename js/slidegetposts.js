const firstPage = "https://wordpress.relouding.eu/wp-json/wp/v2/posts"
const postContainer = document.querySelector(".image-carousel");

async function getBlogPosts(url){
    try {
        const response = await fetch(url);
        const posts = await response.json();

        console.log(posts);

    posts.forEach(function(post){
        postContainer.innerHTML += `
        <figure>
        <h2>${post.title.rendered}</h2>
        <p>${post.content.rendered}</p>
        <a href="blogspecific.html?id=${post.id}">read more</a>
        </figure>
        `
      })
    }

    catch(error) {
        console.log(error);
        postContainer.innerHTML = message("error", error);
    }
}

getBlogPosts(firstPage);
