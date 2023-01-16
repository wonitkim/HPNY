import { getRandomImg, getUploadPost } from './apis/api.js';
import Header from './Header.js';
import { routeChange } from './router.js';

export default function Upload({ $target }) {
  const $page = document.createElement('section');
  $page.id = 'upload_page';

  this.state = { image: '', title: '', content: '' };
  this.setState = (new_state) => {
    this.state, (this.state[new_state.name] = new_state.value);
  };

  $page.addEventListener('click', async (e) => {
    if (e.target.id === 'img_upload_btn') {
      const data = await getRandomImg();
      this.setState({ name: 'image', value: data.urls.regular });
    }

    if (e.target.id === 'upload_btn') {
      this.setState({ name: 'title', value: document.querySelector('#post_title').value });
      this.setState({ name: 'content', value: document.querySelector('#post_content').value });
      let check = checkField();
      if (check.result) {
        let option = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.state),
        };
        let result = await getUploadPost(option);
        if (result.code === 201) {
          routeChange('/');
        } else {
        }
      } else {
        return alert(check.msg);
      }
    }
  });

  const checkField = () => {
    if (this.state.img === '') return { result: false, msg: '랜덤 이미지를 선택해주세요.' };
    else if (this.state.title === '') return { result: false, msg: '제목을 입력해주세요.' };
    else if (this.state.content === '') return { result: false, msg: '내용을 입력해주세요.' };
    return { result: true };
  };

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
