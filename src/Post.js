export default function Post({ $target, p_id }) {
  this.state = { p_id };

  const $page = document.createElement('div');
  $page.id = 'post_page';
  $page.innerHTML = `<h1>게시글 입니당.</h1>`;

  console.log(p_id);
  this.render = () => {
    $target.appendChild($page);
  };
}
