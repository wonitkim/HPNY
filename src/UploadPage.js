import { getRandomImg } from './apis/api.js';
import Header from './Header.js';

export default function Upload({ $target }) {
  const $page = document.createElement('section');
  $page.id = 'upload_page';

  this.setState = (new_state) => {
    this.state = new_state;
  };

  $page.addEventListener('click', async (e) => {
    if (e.target.id === 'img_upload_btn') {
      const data = await getRandomImg();
      console.log(12313123);
      console.log(data);
    }
  });

  this.render = () => {
    new Header({ $target: $page, type: 'detail' });
    $page.innerHTML += `<div class="upload_inner">
      <div id="img_upload_btn">
        <span></span>
      </div>
      <div class="input_wrap">
        <label class="input_label">제목</label>
        <input id="post_title" placeholder="글 제목을 작성해주세요.">
        </div>
      <div class="input_wrap">
        <label class="input_label">내용</label>
        <textarea id="post_content" placeholder="글 내용을 작성해주세요."></textarea>
      </div>
    </div>
    <div class="btn_wrap">
      <div id="upload_btn">등록하기</div>
    </div>
    `;
    $target.appendChild($page);
  };
}
