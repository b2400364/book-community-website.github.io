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
