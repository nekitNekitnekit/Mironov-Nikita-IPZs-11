const filterBtns = document.querySelectorAll('.filter__item'); 
const projects = document.querySelectorAll('.projects__item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.textContent;
    
    projects.forEach(project => {
      const projectCategory = project.querySelector('.projects__description-text').textContent;
      
      if(category === 'Усі') {
        project.style.display = 'block';  
      } else if (category === 'Веб-сайти' && projectCategory.includes('Веб-сайт')) {
        project.style.display = 'block';
      } else if (category === 'Додатки' && projectCategory.includes('Додаток')) {
        project.style.display = 'block';
      } else if (category === 'Дизайн' && projectCategory.includes('Дизайн')) {
        project.style.display = 'block';  
      } else if (category === 'Маркетинг' && projectCategory.includes('Маркетинг')) {
        project.style.display = 'block';  
      }else {
        project.style.display = 'none';
      }
    });
  });
});