const activeUser = JSON.parse(localStorage.getItem('user'))
console.log(activeUser)
let profileName = document.querySelector('.profile')
profileName.textContent = `${activeUser.name} ${activeUser.surname}`
let sectionPosts = document.querySelector('.section-post')
let formPosts = document.querySelector('.post-add-form')
const formPostEl = document.querySelector(".post-add-form");

const addPost = (event) => {
    formPosts.style.display = 'flex'
}

const applyPost = (event) => {
    event.preventDefault();
    
    const formPost = new FormData(formPostEl);
    const newPost = Object.fromEntries(formPost);

  localStorage.setItem("post", JSON.stringify(newPost))
  sectionPosts.innerHTML += `
            <article class="card-post">
                <div>
                    <div style="display: flex;">
                        <img src="../Img/free-icon-humanoid-9980973.png">
                        <h2>${activeUser.name} ${activeUser.surname}</h2>
                    </div>
                    <p>${newPost.text}</p>
                    <hr>
                </div>
            </article>`
  formPostEl.style.display = 'none'
}

formPostEl.addEventListener("submit", applyPost);
console.log(formPostEl)