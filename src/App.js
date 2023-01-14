import BoardPage from './BoardPage.js';
import Post from './Post.js';
import Upload from './Upload.js';

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = ``;

    if (pathname === '/') {
      new BoardPage({ $target }).render();
    } else if (pathname === '/upload') {
      new Upload({ $target }).render();
    } else if (pathname.indexOf('/post/') !== -1) {
      //게시글 구분을 위한 id 추출
      const [, , p_id] = pathname.split('/');
      new Post({ $target, p_id }).render();
    }
  };

  this.route();
}
