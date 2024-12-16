// Questions for the quiz
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: "Pacific"
    }
  ];



  
  let currentQuestionIndex = 0;
  let userAnswers = [];
  
  // Function to load the current question and options
  function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const nextButton = document.getElementById('next-button');
  
    // Display the question
    questionContainer.innerHTML = `<h2>${questionData.question}</h2>`;
  
    // Display the options
    optionsContainer.innerHTML = '';
    questionData.options.forEach(option => {
      const optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.onclick = () => selectAnswer(option);
      optionsContainer.appendChild(optionButton);
    });
  
    nextButton.style.display = 'none'; // Hide next button until an option is selected
  }
  
  // Function to handle the answer selection
  function selectAnswer(answer) {
    userAnswers[currentQuestionIndex] = answer;
    document.getElementById('next-button').style.display = 'inline-block'; // Show next button
  }
  
  // Function to go to the next question
  function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {



        
     alert('Quiz Complete!');
    

      
    }
  }
  
  loadQuestion();
  
  // Enable offline functionality by caching the app's assets in the service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(() => {
      console.log('Service-Worker Registered');
    });
  }








