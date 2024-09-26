//checkbox

const checkboxInput = document.getElementById('checkbox-input');
const checkedSvg = document.querySelector('.checked');
const uncheckedSvg = document.querySelector('.unchecked');

checkboxInput.addEventListener('change', function() {
  if (checkboxInput.checked) {
    checkedSvg.style.display = 'block';
    uncheckedSvg.style.display = 'none';
  } else {
    checkedSvg.style.display = 'none';
    uncheckedSvg.style.display = 'block';
  }
});