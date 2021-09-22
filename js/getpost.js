const detailContainer = document.querySelector(".container-posts");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://wordpress.relouding.eu/wp-json/wp/v2/posts/" + id;

console.log(url);

async function fetchPost() {

    try {
        const response = await fetch(url);
        const post = await response.json();

        console.log(post);

        createHtml(post);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("there is an error", error);
    }

}

fetchPost();

function createHtml(post) {
    document.title = `${post.title.rendered}`;
    detailContainer.innerHTML = `
        <div class="blog-posts image">
        <div><h1>${post.title.rendered}</h1></div>
        <img id="myImg" class="animation fullscreen" src="${post.better_featured_image.source_url}" alt="${post.title.rendered}">
        <div><p>${post.content.rendered}</p></div>
        <p>&#9998; ${new Date(post.date).toLocaleString()}</p>
        </div>
    `;
    clickScreenshot();
}

// Get the modal
var modal = document.getElementById("myModal");

function clickScreenshot() {
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
};}