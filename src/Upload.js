export default function Upload({ $target }) {
  const $page = document.createElement('div');
  $page.id = 'upload_page';
  $page.innerHTML = `<h1>게시글 작성입니다.</h1>`;

  this.render = () => {
    $target.appendChild($page);
  };
}
