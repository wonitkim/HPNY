import BoardPage from './BoardPage.js';
import Post from './Post.js';
import { init } from './router.js';
import UploadPage from './UploadPage.js';

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = ``;

    if (pathname === '/') {
      new BoardPage({ $target }).render();
    } else if (pathname === '/upload') {
      new UploadPage({ $target }).render();
    } else if (pathname.indexOf('/post/') !== -1) {
      //게시글 구분을 위한 id 추출
      const [, , p_id] = pathname.split('/');
      new Post({ $target, p_id }).render();
    }
  };

  init(this.route);
  this.route();

  window.addEventListener('popstate', () => {
    this.route();
  });
}
