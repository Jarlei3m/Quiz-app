const quizData = [
    {
        question: 'How many countries exists?',
        a: '85',
        b: '127',
        c: '161',
        d: '193',
        correct: 'd'
    },
    {
        question: 'What is the most popular programming language in 2020?',
        a: 'Java',
        b: 'Python',
        c: 'C#',
        d: 'Javascript',
        correct: 'b'
    },
    {
        question: 'Who is the president of ireland?',
        a: 'Michael Higgins',
        b: 'Mark Rutte',
        c: 'Mary McAleese',
        d: 'Leo Varadkar',
        correct: 'a'
    },
    {
        question: 'What does HTML satand for?',
        a: 'HyperText Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jsonm Object Notation',
        d: 'Applicaiton programing interface',
        correct: 'a'
    },
    {
        question: 'What year was Javascript launched?',
        a: '1996',
        b: '1994',
        c: '1998',
        d: 'None of the above',
        correct: 'd'
    },

];

const result = document.getElementById('quiz');
const questionElement = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let chosenAnswer = ""

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    const allAnswers = document.querySelectorAll('.answer');

    allAnswers.forEach(answer => {
        if(answer.checked) {
            chosenAnswer = answer.id;
        } 
        answer.checked = "";
        return chosenAnswer
    });
}

submitBtn.addEventListener('click', () => {
    // get the answer
    getSelected();

    console.log(chosenAnswer)
    // check if has answer
    if(chosenAnswer) {
        const currentQuizData = quizData[currentQuiz];

        currentQuiz++;

        //is the answer correct? If yes, add +1 to score
        if(chosenAnswer === currentQuizData.correct) {
            score += 1;
        }
        
        // check if has questions left
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // show results 
            result.innerHTML = `<h2>Finished!</h2><br>
            <h4>You answered correctly ${score} out of ${quizData.length} questions!</h4><br>
            <button onclick="location.reload()">Try Again?</button>`
        }
        chosenAnswer = "";
    }
})
