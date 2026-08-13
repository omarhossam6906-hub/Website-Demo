var nav_links = document.querySelectorAll('.nav-dropdown .dropdown-item');

for (let i = 0; i < nav_links.length; i++) {
    nav_links[i].onclick = function () {

        for (let j = 0; j < nav_links.length; j++) {
            nav_links[j].classList.remove('active');
        }

        nav_links[i].classList.add('active');
    }
}