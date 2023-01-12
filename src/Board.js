export default function Board({ $target }) {
  const $page = document.createElement('div');
  $page.classList.add('BoardPage');
  $page.innerHTML = '<h1>게시글 목록입니당</h1>';

  this.render = () => {
    $target.appendChild($page);
  };
}
