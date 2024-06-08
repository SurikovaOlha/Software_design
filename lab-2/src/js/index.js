const $button = document.querySelector("button");
const $textarea = document.querySelector("textarea");
const $messageList = document.querySelector(".message-list");

// Принцип DRY - уникнення дублювання коду
function greetUser(username) {
  return `Привіт, ${username}! Я ваш чат-бот.`;
}

function askQuestion(question) {
  return `Питання: ${question}`;
}

// Принцип KISS - простота коду
function getAnswer() {
  return "Відповідь на ваше питання.";
}

// Принцип SOLID - використання принципів об'єктно-орієнтованого програмування
class ChatBot {
  constructor(name) {
    this.name = name;
  }

  greetUser(username) {
    return `Привіт, ${username}! Я ${this.name}.`;
  }

  answerQuestion(question) {
    return $messageList.innerHTML += `<div class="message user-message">${question}</div>`;
  }
}

// Принцип YAGNI - уникнення зайвого функціоналу
function logMessage(message) {
  $messageList.innerHTML +=
      `<div class="message">
      Питання. ${message} 
    </div>`
}

// Використання чат-боту
const bot = new ChatBot("Бот");

$button.addEventListener('click', function(e) {
  const val = $textarea.value

  logMessage(val)
  bot.answerQuestion("Відповідь формується")
  $textarea.value = ""
})

// logMessage(bot.greetUser("Користувач"));
// logMessage(bot.answerQuestion("Який твій улюблений колір?"));
