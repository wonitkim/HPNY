import { dummy } from './apis/api.js';
import Header from './Header.js';
import PostList from './PostList.js';

export default function BoardPage({ $target }) {
  const $page = document.createElement('section');
  $page.id = 'board_page';

  this.render = () => {
    $target.appendChild($page);
  };

  this.setState = (new_state) => {
    this.state = new_state;
  };

  const selectPosts = async () => {
    const posts = await dummy('/');
    this.setState(posts);
    new Header({ $target: $page, type: 'main' });
    $page.innerHTML += `<div class="btn_wrap">
      <a href="/upload">
        <span class="btn_icon"></span>
        <span class="btn_title">새 글 작성하기</span>
      </a>
    </div>`;
    new PostList({ $target: $page, init: this.state });
  };
  selectPosts();
}
