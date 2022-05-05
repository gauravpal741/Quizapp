
var quizdata=[];
let javascriptquiz = [{
    question: "Inside which HTML element do we put the JavaScript?",
    option1: "<scripting>",
    option2: "<javascript>",
    option3: "<script>",
    option4: "<js>",
    ans: "option3"
},
{
    question: "Where is the correct place to insert a JavaScript?",
    option1: "the <head> section",
    option2: "both the <head> section and <body> section are correct",
    option3: "the <body> section",
    option4: "none",
    ans: "option2"
},
{
    question: "The external JavaScript file must contain the <script> tag.",
    option1: "true",
    option2: "false",
    option3: "no neccessery",
    option4: "none of the above",
    ans: "option1"
},
{
    question: "How do you create a function in JavaScript?",
    option1: "function:function()",
    option2: "function myfunction()",
    option3: "function = myfunction()",
    option4: "none",
    ans: "option2"
},
{
    question: "How do you call a function named myFunction?",
    option1: "myfunction()",
    option2: "call function myfunction()",
    option3: "call myfunction()",
    option4: "none",
    ans: "option1"
},
{
    question: "How to write an IF statement in JavaScript?",
    option1: "if(i==5)",
    option2: "if i=5",
    option3: "if i=5 then",
    option4: "if i==5 then",
    ans: "option1"
},
{
    question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    option1: "if i<>5",
    option2: "if (i<>5)",
    option3: "if(i!=5)",
    option4: "if i!=5 then",
    ans: "option3"
},
{
    question: "How does a WHILE loop start?",
    option1: "while(i<=10)",
    option2: "while i=1 to 10",
    option3: "while(i<=10; i++)",
    option4: "none",
    ans: "option1"
},
{
    question: "How does a FOR loop start?",
    option1: "for(i<=5;i++)",
    option2: "for(i=0;i<=5;i++)",
    option3: "for i= 1 to 5",
    option4: "for(i=0;i<=5)",
    ans: "option2"
},
{
    question: "How can you add a comment in a JavaScript?",
    option1: "'this is comment",
    option2: "<!--this is comment--!>",
    option3: "//this is comment",
    option4: "*this is comment*",
    ans: "option3"
},
];

let htmlquiz = [{
    question: "What does HTML stand for?",
    option1: "Hyper Text Markup Language",
    option2: "Hyperlink and Text Markup Language",
    option3: "Home Tool Markup Language",
    option4: "none",
    ans: "option1"
},
{
    question: "Who is making the Web standards?",
    option1: "Mozila",
    option2: "the world wide web consoritium",
    option3: "google",
    option4: "microsoft",
    ans: "option2"
},
{
    question: "Choose the correct HTML element for the largest heading:",
    option1: "<head>",
    option2: "<h6>",
    option3: "<heading>",
    option4: "<h1>",
    ans: "option4"
},
{
    question: "What is the correct HTML element for inserting a line break?",
    option1: "<br>",
    option2: "<break>",
    option3: "<Ib>",
    option4: "none",
    ans: "option1"
},
{
    question: "Which character is used to indicate an end tag?",
    option1: "*",
    option2: "^",
    option3: "/",
    option4: "<",
    ans: "option4"
},
{
    question: "Which of these elements are all <table> elements?",
    option1: "<table><tr><tt>",
    option2: "<table><tr><td>",
    option3: "<table><head><tfoot>",
    option4: "<thead><body><tr>",
    ans: "option2"
},
{
    question: "Inline elements are normally displayed without starting a new line.",
    option1: "true",
    option2: "false",
    option3: "not nessesary",
    option4: "none",
    ans: "option1"
},
{
    question: "How can you make a numbered list?",
    option1: "<list>",
    option2: "<dl>",
    option3: "<ol>",
    option4: "<ul>",
    ans: "option3"
},
{
    question: "How can you make a bulleted list?",
    option1: "<dl>",
    option2: "<list>",
    option3: "<ul>",
    option4: "<ol>",
    ans: "option3"
},
{
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    option1: "alt",
    option2: "longdesc",
    option3: "src",
    option4: "title",
    ans: "option1"
}
];

let cssquiz = [{
    question: "What does CSS stand for?",
    option1: "Casecading Style Sheet",
    option2: "creative style sheet",
    option3: "colourfull style sheet",
    option4: "computer style sheet",
    ans: "option1"
},
{
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    option1: "in the <body> section",
    option2: "At the end of document",
    option3: "In the <head> section",
    option4: "none",
    ans: "option3"
},
{
    question: "Which HTML tag is used to define an internal style sheet?",
    option1: "<script>",
    option2: "<css>",
    option3: "<styte>",
    option4: "<style>",
    ans: "option4"
},
{
    question: "Which is the correct CSS syntax?",
    option1: "body:color=black",
    option2: "body{color:black;}",
    option3: "{body;color:black;}",
    option4: "{body:color=black}",
    ans: "option2"
},
{
    question: "How do you insert a comment in a CSS file?",
    option1: "//This is comment",
    option2: "//This is comment//",
    option3: "/*This is comment*/",
    option4: "'This is comment",
    ans: "option3"
},
{
    question: "Which property is used to change the background color?",
    option1: "bgcolor",
    option2: "color",
    option3: "background-color",
    option4: "color-bg",
    ans: "option3"
},
{
    question: "How do you add a background color for all <h1> elements?",
    option1: "h1.all{background-color:#fff;}",
    option2: "all.h1{background-color:#fff;}",
    option3: "*{background-color:#fff;}",
    option4: "h1{background-color:#fff;}",
    ans: "option4"
},
{
    question: "Which CSS property is used to change the text color of an element?",
    option1: "fgcolor",
    option2: "color",
    option3: "text-color",
    option4: "bgcolor",
    ans: "option2"
},
{
    question: "Which CSS property controls the text size?",
    option1: "text-size",
    option2: "text-style",
    option3: "font-size",
    option4: "font-style",
    ans: "option3"
},
{
    question: "How do you make each word in a text start with a capital letter?",
    option1: "transform:capitalize",
    option2: "text-style:capitalize",
    option3: "text-transform:capitalize",
    option4: "you can't do with CSS",
    ans: "option3"
}
];
 let newquizdata=[];
 newquizdata.push(htmlquiz);
 newquizdata.push(cssquiz);
 newquizdata.push(javascriptquiz);

function quiztype(e){
    e.preventDefault();
    document.getElementById("sect").style.display="none"
    document.getElementById("quiz").style.display="block"
   let neww = document.getElementById("quizsel").value
   quizdata=newquizdata[neww];
   loadquiz();
}

let quiz = document.getElementById("quiz");
let questionA = document.getElementById("question");
let answerA = document.querySelectorAll(".option");
let opa = document.getElementById("a_ans");``
let opb = document.getElementById("b_ans");
let opc = document.getElementById("c_ans");
let opd = document.getElementById("d_ans");

let currentquiz = 0;
let score = 0;
loadquiz();

function loadquiz() {
    let currentquizdata = quizdata[currentquiz];
    questionA.innerText = currentquizdata.question;
    opa.innerText = currentquizdata.option1;
    opb.innerText = currentquizdata.option2;
    opc.innerText = currentquizdata.option3;
    opd.innerText = currentquizdata.option4;
    noselect();
}
function noselect() {
   answerA.forEach(answerA1 => answerA1.checked = false);
}
function getselected() {
    let answer
   answerA.forEach(answerA1 =>{   
    if(answerA1.checked){
        answer = answerA1.id
    }
    });
    return answer;
}
function myfun() {
    let answer = getselected();
    if (answer) {
        if (answer === quizdata[currentquiz].ans) {
            score++
        }
        currentquiz++
        if (currentquiz < quizdata.length) {
            loadquiz()
        }
        else {
            quiz.innerHTML = `<h1>${score}/${quizdata.length}</h1>`
        }
    }
    if(currentquiz==quizdata.length-1){
        quiz.innerHTML = `<h1>${score}/${quizdata.length}</h1>`
    }
}
function nextre(){
    let newdata = getselected();
    if(currentquiz<quizdata.length-1 && newdata==null){
    currentquiz++
    loadquiz()
    }
}