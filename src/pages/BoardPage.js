import { getPostList } from "../apis/api.js";
import Header from "../components/Header.js";
import PostList from "../components/PostList.js";

export default function BoardPage({ $target }) {
  const $page = document.createElement("section");
  $page.id = "board_page";

  this.render = () => {
    $target.appendChild($page);
  };

  this.setState = (new_state) => {
    this.state = new_state;
  };

  const selectPosts = async () => {
    const { data } = await getPostList();
    this.setState(data.posts);
    new Header({ $target: $page, type: "main" });
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
