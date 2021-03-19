const View = {
  render({ minutes, seconds }) {
    document.body.innerHTML = `
    <p>Pomodoro</p>
   <span>${minutes}:${seconds}</span>`;
  },
  // render() {
  //   const timer = document.getElementById('timer');
  //   if (!timer) {
  //     return;
  //   }
  //   timer.innerHTML = `
  //   <p>Próximo Alert</p>
  //   <span>10:01</span>
  //   `;
  // },
};

// View.render();

export { View };
