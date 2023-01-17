import { deleteComment, getPostDetail } from './apis/api.js';

export default function CommentList({ $target, p_id, init }) {
  const $comment_list = document.createElement('ul');
  $comment_list.classList.add('comment_list');
  $target.appendChild($comment_list);
  this.state = init;

  this.setState = (new_state) => {
    this.state = new_state;
    this.render();
  };

  $target.addEventListener('click', async (e) => {
    if (e.target.classList.contains('comment_delete_btn')) {
      let c_id = e.target.parentNode.dataset.id;
      let { code } = await deleteComment(c_id, { method: 'DELETE' });
      if (code === 200) {
        let result = await getPostDetail(p_id);
        this.setState(result.data.comments);
      }
    }
  });

  this.render = () => {
    if (!this.state) {
      console.log('no_state');
      return;
    }
    $comment_list.innerHTML = `${this.state
      .map(
        (val) =>
          `<li class="comment_item" data-id="${val.commentId}">
              <p class="comment">${val.content}</p>
              <span class="comment_delete_btn"></span>
            </li>`
      )
      .join('')}`;
  };

  this.render();
}
