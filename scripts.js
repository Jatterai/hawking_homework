const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

const rand = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
}



loadBtn.addEventListener("click", function (e) {
	e.preventDefault();
	const searchValue = searchInput.value.trim().toLowerCase();
	fetch(`https://api.github.com/users/${searchValue}`)
		.then(res => res.json())
		.then(
			(data) => {
				resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
					 <div>
						<p> Имя: <span>${data.name}</span><p>
						<p> О себе: <span>${data.bio}</span><p>
						<p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
					 </div>
            </div>`;
				showPosts();
			}

		);

});


//------------------------ posts -------------------//
function showPosts() {
	const random_post = () => rand(0, 10);
	axios.get('https://jsonplaceholder.typicode.com/users')
		.then(({ data }) => {

			console.log(data);

			const container = document.createElement('div');
			container.className = 'posts-container';

			for (let post of data) {
				console.log(post);
				const item = document.createElement('div');
				item.className = 'post';

				item.innerHTML =
					`<p><span>${post.name}</span><span>@${post.username}   (id${post.id})</span></p>
				<p>${post.email}</p>
				<p class='address inf'><span>Adress:</span> ${post.address.city}, ${post.address.street} Street, ${post.address.suite}</p>
				<p class='phone inf'><span>Phone: </span> ${post.phone}</p>
				<p class='web inf'><span>Website: </span> ${post.phone}</p>`

				container.append(item)
			}
			resultsContainer.append(container);
		})

}


//-------------- most important thing in the world---------------//

console.log('%cУзри, мир, мой самый красивый в мире консоль лог', 'font-size: 40px;	font-weight: 700;	font-family: arial;	background-color: crimson;color: white;	padding: 0.7em;text-shadow: -2px 2px 0px rgb(232, 66, 132), -4px 4px 10px rgb(163, 8, 8);')