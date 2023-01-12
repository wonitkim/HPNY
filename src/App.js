import Board from './Board.js';

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = ``;

    if (pathname === '/') {
      new Board({ $target }).render();
    }
  };

  this.route();
}
