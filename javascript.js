document.addEventListener("DOMContentLoaded", function () {

    /* Shows sections when scrolling */

    const revealElements = document.querySelectorAll(".reveal");

    if (revealElements.length > 0) {

        const observer = new IntersectionObserver(function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }

            });

        }, { threshold: 0.1 });

        revealElements.forEach(function(element) {
            observer.observe(element);
        });

    }



    /* bookreviews.html */

    const searchInput = document.getElementById("bookSearch");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            let searchValue = searchInput.value.toLowerCase();
            let books = document.querySelectorAll(".book");

            books.forEach(function(book) {

                let text = book.textContent.toLowerCase();

                if (text.includes(searchValue)) {
                    book.style.display = "block";
                } else {
                    book.style.display = "none";
                }

            });

        });

    }



    /* Prevent empty submission */

    const reviewForm = document.getElementById("reviewForm");

    if (reviewForm) {

        reviewForm.addEventListener("submit", function(event){

            const name = document.getElementById("name");
            const comment = document.getElementById("comment");

            if (!name.value.trim() || !comment.value.trim()) {

                alert("Please fill in all fields before submitting your review.");
                event.preventDefault();

            }

        });

    }

});

// Welcome message when website loads
window.onload = function(){
    alert("Welcome to the Book Community Website!");
}

// Example interactive feature
function showMessage(){
    alert("Thank you for visiting our book community!");
}

window.location.href="index.html";