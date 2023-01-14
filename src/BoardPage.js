import { dummy } from './apis/api.js';
import Header from './Header.js';
import PostList from './PostList.js';

export default function BoardPage({ $target }) {
  const $page = document.createElement('section');
  $target.appendChild($page);
  $page.id = 'board_page';

  this.setState = (new_state) => {
    this.state = new_state;
    this.render();
  };

  const selectPosts = async () => {
    const posts = await dummy('/');
    this.setState(posts);
  };

  selectPosts();

  this.render = () => {
    new Header({ $target: $page, type: 'detail' }).render();
    new PostList({ $target: $page, init: this.state }).render();
  };
}
