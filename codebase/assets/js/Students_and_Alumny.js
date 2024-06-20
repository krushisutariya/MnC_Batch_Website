
document.addEventListener('DOMContentLoaded', function() {
    const parts = document.querySelectorAll('.part'); 

    parts.forEach((part, index) => {
        const tables = part.getElementsByClassName('list');
        const years = part.getElementsByClassName('y');

        [...tables].forEach(table => table.classList.remove('active'));
        [...years].forEach(year => year.classList.remove('active'));
        if (index === 0 && tables[3] && years[3]) { 
            tables[3].classList.add('active'); 
            years[3].classList.add('active');
        } else if (index === 1 && tables[0] && years[0]) {
            tables[0].classList.add('active'); 
            years[0].classList.add('active');
        }

        for (let i = 0; i < years.length; i++) {
            years[i].addEventListener('click', function() {
                for (let j = 0; j < tables.length; j++) {
                    tables[j].classList.remove('active');
                    years[j].classList.remove('active');
                }

                tables[i].classList.add('active');
                years[i].classList.add('active');
            });
        }
    });
});
