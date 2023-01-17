import { getPostDetail } from './apis/api.js';
import CommentList from './CommentList.js';
import Header from './Header.js';

export default function PostDetailPage({ $target, p_id }) {
  this.state = { p_id };

  const $page = document.createElement('section');
  $page.id = 'post_detail_page';

  this.render = () => {
    $target.appendChild($page);
  };

  this.setState = (new_state) => {
    this.state = new_state;
    console.log(this.state);
  };

  const dateToStr = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
    let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    return year + '.' + month + '.' + day;
  };

  const selectPostDetail = async () => {
    const res = await getPostDetail(p_id);
    this.setState(res.success ? res.data : null);
    new Header({ $target: $page, type: 'detail' });
    let date = new Date(this.state.post.createdAt);

    $page.innerHTML += `<div class="post_detail_inner">
      <artice class="post_article">
        <img src="${this.state.post.image}" alt="">
        <div class="post_article_inner">
          <p class="title">${this.state.post.title}</p>
          <span class="date">${dateToStr(date)}</span>
          <div class="content_wrap">
            <div class="content">${this.state.post.content}</div>
            <div class="article_btn_wrap">
              <div id="post_edit"></div> 
              <div id="post_delete"></div>
            </div>
          </div>
        </div>
      </artice>
      <div class="post_comment_wrap">
      </div>
    </div>
    <div class="btn_wrap">
      <input id="comment_input">
      <div id="leave_comment_btn">
        <span></span>
      </div>
    </div>
    `;
    new CommentList({ $target: $page.querySelector('.post_comment_wrap'), p_id: p_id, init: this.state.comments });
  };

  selectPostDetail();
}
