var questionWrapper     =   $('#question-wrapper');
var submit              =   $('#submit');
var resultModal         =   $('#resultModal');
var resultBody          =   $('#resultBody');

// Adding all the given questions
for(i=0;i<questions.length;i++) {
    alert(questions.length);
    let question = questions[i];
    
    addQuestion(i + 1, question);
}

// Event Handling
submit.click(function() {
    var score = 0;
    let result = confirm("Are your sure you want to submit the quiz ?");
    if(result) {
        for(i=0;i<questions.length;i++) {
            let selectedValue = $(`input[name="option-${i+1}"]:checked`).val();
            if(questions[i].options[selectedValue].correct === true) {
                score++;
            }
        }
    }
    
    resultBody.html(`Your score is : ${score} / ${questions.length }`)
    resultModal.modal('show');
    
});

/******************************************************************************************
                                        PRESENTERS
******************************************************************************************/
function addQuestion(id, question) {
    let questionComponent = `
        <div class="mb-5">
            <div class="quiz-question">
                <p class="h5">${id}. ${question.statement}</p>
            </div>
    `;
    
    for(i=0;i<question.options.length;i++) {
        questionComponent += `
            <div class="form-check form-check-radio">
                <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="option-${id}" id="exampleRadios1" value="${i}">
                    <span class="form-check-sign"></span>
                    ${question.options[i].statement}
                </label>
            </div>
        `;
    }
    
    questionComponent += `</div>`;
    
    questionWrapper.append(questionComponent);
}
