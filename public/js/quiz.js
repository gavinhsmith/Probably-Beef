Array.prototype.shuffle = function () {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
}

const qimg = document.querySelectorAll(".qimg")[0];
const answers = document.querySelectorAll(".answers")[0];

function generateNewQuestion() {
    createQuestion({
        img: "/img/eye_steak_boneless.jpg",
        correct: 0,
        answer: [
            "Test #1",
            "Test #2",
            "Test #3",
            "Test #4"
        ]
    })
}

/**
 * @returns {HTMLButtonElement} 
 */
function createQAnwser(qinf) {
    let btn = document.createElement("button");
    btn.innerHTML = qinf;
    return btn;
}

function createQuestion(qinf) {
    qimg.src = qinf.img;

    answers.innerHTML = "";
    let alist = [];
    for (let i = 0; i < 4; i++) {
        let ans = createQAnwser(qinf.answer[i]);
        if (qinf.correct == i) {
            ans.addEventListener("click", function (e) {
                generateNewQuestion();
            });
        } else {
            let evl = function (e) {
                ans.disabled = true;
                ans.classList.add("false-answer");
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