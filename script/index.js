let cards = [
    {
        decadev: "Nnaji Victor",
        github_username: "Nnaji-Victor",
        title: "Software Engineer",
        facebook: "#",
        twitter: "nnajivictor0"
    }
];


// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                  YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+

// Creates cards from the array above
// You don't need to modify this

function Shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
}

const client_id = "Iv1.2df6b73db91ac316";
const client_secret = "612e0879d893a337599a03959a587a248ef145e3";

const fetchUser = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&
    client_secret=${client_secret}`);

    const data = await api_call.json();
    return { data }
};

resultDiv = document.querySelector(".card-container");

let content = "";
Shuffle(cards).forEach(decadev => {
    fetchUser(decadev.github_username)
        .then(userData => {
            console.log(userData.data);
            resultDiv.innerHTML +=
                `<div class="our-team">
                <ul class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                </ul>
            <div class="picture">
                <img class="img-fluid" src="${userData.data.avatar_url}">
            </div>
            <div class="team-content">
                <h3 class="name">${decadev.decadev}</h3>
                <h4 class="title">${decadev.title}</h4>
            </div>
            <div class="github-container">
            <div class="username">Username: <span>${userData.data.login}</span></div>
            <div class="repo">Repos: <span>${userData.data.public_repos}</span></div>
            </div>
            <ul class="social">
                <li><a href="https://www.facebook.com/${decadev.facebook}" target="_blank"><img src="img/facebook.png" alt="facebook" class="social-icon"></a></li>
                <li><a href="https://www.twitter.com/${decadev.twitter}" target="_blank"><img src="img/twitter.png" alt="twitter.png" class="social-icon"></a></li>
                <li><a href="${userData.data.html_url}" target="_blank"><img src="img/github.png" alt="github" class="social-icon"></a></li>
            </ul>
        </div>`;
        });
});


