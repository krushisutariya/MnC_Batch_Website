
 function toggleAnswer(answerId, iconId) {
          var answer = document.getElementById(answerId);
          var icon = document.getElementById(iconId);
    
          if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            icon.classList.add('rotate180');
          } else {
            answer.style.display = 'none';
            icon.classList.remove('rotate180');
          }
        }
