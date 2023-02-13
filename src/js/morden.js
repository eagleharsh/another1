const quizeData= [
    {
      
        question: "1. Which artist is known for coining the term 'Surrealism'?",
        first: "Pablo Picasso",
        second: "Salvador Dali",
        third: "Vincent van Gogh",
        fourth:  "Henri Matisse",
        ans: "Salvador Dali",
        
      },
      {
        question: "2. Which movement is associated with the use of abstract forms and shapes in art?",
        first: "Impressionism",
        second: "Expressionism",
        third: "Futurism",
        fourth:  "Cubism",
        ans: "Cubism",
      },
      
      {
        
        question: "3. Which artist is known for painting the work 'The Persistence of Memory'?",
        first: "Pablo Picasso",
        second: "Salvador Dali",
        third: "Vincent van Gogh",
        fourth: "Henri Matisse",
        ans: "Salvador Dali",
  
  
  
        
      },
      {
        
        question: "4. Which artist is known for creating the painting 'The Scream'?",
        first: "Vincent van Gogh",
        second:  "Salvador Dali",
        third: "Edvard Munch",
        fourth: "Claude Monet",
        ans: "Edvard Munch",
  
       
        
      },
      {
      
        question: "5. What movement was associated with the use of bold, bright colors and thick brushstrokes?",
        first: "Impressionism",
        second: "Expressionism", 
        third: "Fauvism",
        fourth: "Cubism",
        ans: "Fauvism",
  
        
       
      },
      {
        
        question: "6. What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
        first: "Impressionism",
        second: "Futurism",
        third: "Surrealism", 
        fourth: "Abstract Expressionism",
        ans: "Futurism",
  
        
      },
      {
  
        question: "7. Which artist is known for creating the painting 'Water Lilies'?",
        first: "Claude Monet",
        second: "Paul Cezanne", 
        third: "Paul Gauguin",
        fourth:"Paul Klee",
        ans: "Claude Monet",
       
      },
      {
     
        question: "8. Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
        first: "Henri Matisse", 
        second:  "Vincent van Gogh",
        third: "Salvador Dali", 
        fourth: "Pablo Picasso",
        ans: "Pablo Picasso",
  
        
      },
      {
      
        question: "9. Which artist is known for creating the painting 'Guernica'?",
        first: "Claude Mone", 
        second: "Paul Cezanne", 
        third: "Pablo Picasso", 
        fourth: "Vincent van Gogh",
        ans: "Pablo Picasso",
  
        
       
      },
      {
        
        question: "10. Which artist is known for creating the sculpture 'The Thinker'?",
        first: "Auguste Rodin",
        second: "Alexander Calder",
        third: "Jean Arp",
        fourth: "Henry Moore",
        ans: "Auguste Rodin",
  
       
        
      }
]

const question = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
    const submit = document.querySelector('#submit');
    
    const answers = document.querySelectorAll('.answer');
    const myScore = document.querySelector('#myScore');
     
    let questionCount = 0;
    let score = 0;
    
    const loadQuestion = ()=>{
        const questionList = quizeData[questionCount];
        question.innerText = questionList.question;
        option1.innerText = questionList.first;
        option2.innerText = questionList.second;
        option3.innerText = questionList.third;
        option4.innerText = questionList.fourth;
    }
    loadQuestion();
    const getCheckAnswer = () =>{
        let answer;
        answers.forEach((curAnsElem)=>{
            if(curAnsElem.checked){
                answer = curAnsElem.id;
            }
            
        });
        return answer;
    }
    
    const deselectAll = ()=>{
        answers.forEach((curAnsElem)=> curAnsElem.checked = false);
    }
    
    submit.addEventListener('click',() => {
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);
    
        if(checkedAnswer === quizeData[questionCount].ans){
            score++;
        };
          questionCount++;
    
          deselectAll();

          if(questionCount < quizeData.length){
              loadQuestion();
          }
          else{
              myScore.innerHTML = `<h3> You scored ${score}/${quizeData.length}</h3>
              <button class="btn" onclick="location.reload()">Play Again</button>`;
              myScore.classList.remove('scoreArea');
    }
      });        












    