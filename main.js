var posts = "https://jsonplaceholder.typicode.com/posts";
var photos = "https://jsonplaceholder.typicode.com/photos";
var users = "https://randomuser.me/api/?results=100";

var funcState = true;

function fetchData() {
  if (funcState) {
    fetch(posts)
      .then(resPost => resPost.json())
      .then(post => {
        return fetch(photos)
          .then(resPhoto => resPhoto.json())
          .then(photo => {
            return fetch(users)
              .then(resUser => resUser.json())
              .then(user => {
                console.log(user);
                var output = "";
                var usersImg = user.results;
                // console.log(post);
                usersImg.map(imgData => {
                  console.log(imgData);
                  return post.map(val => {
                    return photo.map(imgVal => {
                      if (val.id === imgVal.id) {
                        return (output += `
             <div class="col-sm-4 mb-4">
                <div class="card">
                <img class="card-img-top imgClass" src="${
                  imgData.picture.large
                }" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${val.title}</h5>
                <p class="card-text">${val.body}</p>
                <a href="mailto:${
                  val.title
                }" class="btn btn-success" id="btn">Submit</a>
                </div>
                </div>
                </div>
             `);
                      }
                    });
                  });
                });

                document.getElementById("root").innerHTML = output;
              });
          });
      });

    funcState = false;
  } else if (!funcState) {
    document.getElementById("root").style.visibility = "hidden";

    funcState = true;
  }
}
