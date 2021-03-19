import { Notilyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';

// const notify = Notilyer.notify({
//   title: 'Hora do Post',
//   body: 'Crie algum conteúdo para ajudar a comunidade',
// });

const messages = ['Postar foto do meu setup', 'Postar uma frase motivacional'];

const notify = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);

  const notification = Notilyer.notify({
    title: 'Hora do Post',
    body: messages[randomIndex],
  });

  notification();
};

const App = {
  async start() {
    try {
      await Notilyer.init();

      Emitter.on('countdown-start', notify);
      Emitter.on('countdown-end', Timer.init);

      const time = 60;
      Timer.init(time);
    } catch (err) {
      console.log(err.message);
    }
  },
};
export { App };
