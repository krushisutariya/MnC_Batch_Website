const items = document.getElementsByClassName('btn');
const cards = document.getElementsByClassName('card');
const no_con = document.getElementsByClassName('no-content');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
        cards[i].classList.toggle('active');
        no_con[i].classList.remove('active');
        let t=cards[i].getElementsByClassName('title');
        let dc=cards[i].getElementsByClassName('display-content');
        let h=cards[i].getElementsByClassName('fhead');
        for(let j=0;j<t.length;j++)
        {
            t[j].classList.remove('active');
            dc[j].classList.remove('active');
            h[j].classList.remove('active');
        }
    });
}

const items1 = document.getElementsByClassName('ptn');
for (let i = 0; i < items1.length; i++) {
    items1[i].addEventListener('click', function () {
        cards[i].classList.toggle('active'); 
    });
}



for (let i = 0; i < cards.length; i++) {
  const titles = cards[i].getElementsByClassName('title');
  const content=cards[i].getElementsByClassName('display-content');
  
  for (let j = 0; j < titles.length; j++) {
    titles[j].addEventListener('click', function () {
      for (let k = 0; k < titles.length; k++) {
        titles[k].classList.remove('active');
        content[k].classList.remove('active');
       
      }
      no_con[i].classList.add('active');
      titles[j].classList.toggle('active');
      content[j].classList.toggle('active');
      
    });
  }
}


