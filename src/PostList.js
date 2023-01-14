export default function PostList({ $target, init }) {
  const $post_list = document.createElement('ul');
  $target.appendChild($post_list);
  console.log(init);
  this.state = init;

  this.setState = (new_state) => {
    this.state = new_state;
    this.render();
  };

  this.render = () => {
    if (!this.state) {
      console.log('no_state');
      return;
    }

    $post_list.innerHTML = `${this.state
      .map(
        (post) =>
          `<li class="post_list">
            <a href="/post/${post.postId}">
              <img class="post_img" src="${post.image}" alt="">
              <div class="post_list_inner">
                <p class="title">${post.postId}</p>
                <p class="content">${post.content}</p>
              </div>
            </a>
          </li>`
      )
      .join('')}`;
  };
}
