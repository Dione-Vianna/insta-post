import { Notilyer } from './Notifyer.js';
const App = {
  async start() {
    try {
      await Notilyer.init();
      Notilyer.notify({
        title: 'Hora do Post',
        body: 'Crie algum conteúdo para ajudar a comunidade',
      });
    } catch (err) {
      console.log(err.message);
    }
  },
};
export { App };
