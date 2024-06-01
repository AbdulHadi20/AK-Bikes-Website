document.addEventListener("DOMContentLoaded", function() {
    var faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function(question) {
        question.addEventListener("click", function() {
            var answer = this.nextElementSibling;
            if (answer.classList.contains("open")) {
                answer.classList.remove("open");
            } else {
                answer.classList.add("open");
            }
        });
    });
});
