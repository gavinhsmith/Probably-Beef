const qimg = document.querySelectorAll(".qimg")[0];
const answers = document.querySelectorAll(".answers")[0];

const rat_right = document.querySelectorAll(".correct")[0];

let correct = 0;
let incorrect = 0;

/**
 * @returns {Map<string,string>} All Possible Answers
 */
function generatePossibleAnswerList() {
    let fin = new Map();

    for (let i = 0; i < questions.length; i++) {
        for (let j = 0; j < question_answers[2].length; j++) {
            let id = questions[i].correct.join("").slice(0,-1)+j;
            fin.set(id, `${question_answers[0][questions[i].correct[0]]}, ${question_answers[1][questions[i].correct[1]]} (Cooking Method: ${question_answers[2][j]})`);
        }
    }
    
    /*
    for (let i = 0; i < question_answers[0].length; i++) {
        for (let j = 0; j < question_answers[1].length; j++) {
            for (let k = 0; k < question_answers[2].length; k++) {
                fin.set(`${i}${j}${k}`, `${question_answers[0][i]}, ${question_answers[1][j]} (Cooking Method: ${question_answers[2][k]})`);
            }
        }
    }
    */

    return fin;
}
const answer_list = generatePossibleAnswerList();

let copy_of_questions = Array.from(questions);

function getRandomQuestions(correct_answer) {
    let answers = [answer_list.randomKey(), answer_list.randomKey(), answer_list.randomKey()];
    while (answers.join(",").indexOf(correct_answer) !== -1) {
        let answers_str = answers.join(",");
        let copy_index = answers_str.indexOf(correct_answer);
        let positions = [answers_str.indexOf(","), answers_str.lastIndexOf(",")];
        let pos = (copy_index < positions[0]) ? 0 : ((copy_index > positions[1]) ? 2 : 1);
        answers[pos] = answer_list.randomKey();
    };
    let correct_p = Number(correct_answer.slice(0,1));
    let correct_cm = Number(correct_answer.slice(-1));
    let replacememt_p1 = Number(answers[2].slice(0,1));
    let replacememt_cm1 = Number(answers[2].slice(-1));
    while (replacememt_p1 !== correct_p || correct_cm === replacememt_cm1) {
        answers[2] = answer_list.randomKey();
        replacememt_p1 = Number(answers[2].slice(0,1));
        replacememt_cm1 = Number(answers[2].slice(-1));
    }
    return answers;
}

function generateNewQuestion() {
    if (copy_of_questions.length <= 0) copy_of_questions = Array.from(questions);

    let qindex = copy_of_questions.randomIndex();
    let quest = copy_of_questions.remove(qindex);

    let randq = getRandomQuestions(quest.correct.join(""));
    console.log(quest);

    createQuestion({
        img: quest.img,
        correct: 0,
        answer: [
            answer_list.get(quest.correct.join("")),
            answer_list.get(randq[0]),
            answer_list.get(randq[1]),
            answer_list.get(randq[2])
        ]
    }, quest);
}

/**
 * @returns {HTMLButtonElement} 
 */
function createQAnwser(qinf) {
    let btn = document.createElement("button");
    btn.innerHTML = qinf;
    return btn;
}

function ratToPerc(x,y) {
    return ((x - 1) - (y - 1)) / (x - 1) * 100;
}

function createQuestion(qinf, orig_q) {
    qimg.src = qinf.img;

    let was_first_try = true;

    answers.innerHTML = "";
    let alist = [];
    for (let i = 0; i < 4; i++) {
        let ans = createQAnwser(qinf.answer[i]);
        if (qinf.correct == i) {
            ans.addEventListener("click", function (e) {
                if (!was_first_try) {
                    copy_of_questions.push(orig_q);
                };
                correct++;
                rat_right.innerHTML = Math.reduce(correct,incorrect);
                generateNewQuestion();
            });
        } else {
            let evl = function (e) {
                ans.disabled = true;
                ans.classList.add("false-answer");
                incorrect++;
                rat_right.innerHTML = Math.reduce(correct,incorrect);
                was_first_try = false;
            };
            ans.addEventListener("click", evl);
        };
        alist.push(ans);
    };
    alist.shuffle();

    alist.forEach(elm => {
        answers.appendChild(elm);
    });
};

generateNewQuestion();