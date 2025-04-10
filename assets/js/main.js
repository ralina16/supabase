// Выпадающее меню для "Product"
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Выпадающее меню для "Developers"
function myFunction1() {
    document.getElementById("myDropdown-1").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn-1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-1");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Выпадающее меню для "Deploy"
function myFunction3() {
    const dropdown = document.getElementById("myDropdown_3");
    dropdown.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.closest('.menu-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown_content_3");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Аккордеон
document.addEventListener("DOMContentLoaded", function () {
    const accardions = document.querySelectorAll(".accardion");

    accardions.forEach(accardion => {
        const header = accardion.querySelector(".accardion-header");
        const content = accardion.querySelector(".accardion-content");

        header.addEventListener("click", () => {
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
