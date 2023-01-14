import Board from './Board.js';
import Posts from './Posts.js';
import Upload from './Upload.js';

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = ``;

    if (pathname === '/') {
      new Board({ $target }).render();
    } else if (pathname === '/upload') {
      new Upload({ $target }).render();
    } else if (pathname.indexOf('/post/') !== -1) {
      const [, , p_id] = pathname.split('/');
      new Posts({ $target, p_id }).render();
    }
  };

  this.route();
}
