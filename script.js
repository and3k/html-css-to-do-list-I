const list = document.querySelectorAll(".list li")

  list.forEach((list) => {
      list.addEventListener('click', () => {
        list.classList.toggle('strike');
      });
    });