export default function PostList({ $target, init }) {
  const $post_list = document.createElement('ul');
  $post_list.classList.add('post_list');
  $target.appendChild($post_list);

  this.state = init;

  // this.setState = (new_state) => {
  //   this.state = new_state;
  //   this.render();
  // };

  this.render = () => {
    if (!this.state) {
      console.log('no_state');
      return;
    }

    $post_list.innerHTML = `${this.state
      .map(
        (post) =>
          `<li class="post_item" data-id="${post.posdId}">
              <img class="post_img" src="${post.image}" alt="">
              <div class="post_item_inner">
                <p class="title">${post.postId}</p>
                <p class="content">${post.content}</p>
              </div>
          </li>`
      )
      .join('')}`;
  };

  this.render();
}
