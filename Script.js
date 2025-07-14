// Alternar entre estados: pendiente → en curso → aprobada
const materias = document.querySelectorAll('.materia');
materias.forEach(m => {
  m.classList.add('pendiente'); // Estado inicial
  m.addEventListener('click', () => {
    if (m.classList.contains('pendiente')) {
      m.classList.remove('pendiente');
      m.classList.add('en-curso');
    } else if (m.classList.contains('en-curso')) {
      m.classList.remove('en-curso');
      m.classList.add('aprobada');
    } else {
      m.classList.remove('aprobada');
      m.classList.add('pendiente');
    }
  });
});
