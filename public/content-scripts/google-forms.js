function fillFirstName() {
  const labels = document.querySelectorAll('div[role="heading"]');
  labels.forEach((label) => {
    if (label.innerText.toLowerCase().includes('first name')) {
      const input = label.parentElement.parentElement.parentElement.parentElement.querySelector('input');
      if (input) {
        input.value = 'Hadley';
      }
    }
  });
}

fillFirstName();
