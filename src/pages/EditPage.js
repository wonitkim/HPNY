import { getPostDetail, editPost } from "../apis/api.js";
import Header from "../components/Header.js";
import { routeChange } from "../router.js";

export default function EditPage({ $target, p_id }) {
  const $page = document.createElement("section");
  $page.id = "edit_page";

  this.state = { image: "", title: "", content: "" };

  this.render = () => {
    $target.appendChild($page);
  };

  this.setState = (new_state) => {
    this.state, (this.state[new_state.name] = new_state.value);
  };

  $page.addEventListener("click", async (e) => {
    if (e.target.id === "edit_btn" && e.target.classList.contains("active")) {
      let option = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state),
      };
      let result = await editPost(p_id, option);
      if (result) {
        if (result.code === 200) {
          routeChange(`/post/${p_id}`);
        } else {
          return alert("실패");
        }
      } else {
        return alert("게시물을 수정하지 못했습니다. \n다시 시도해주세요.");
      }
    }
  });

  $page.addEventListener("keyup", async (e) => {
    if (e.target.id === "post_title") {
      this.setState({
        name: "title",
        value: document.querySelector("#post_title").value,
      });
    } else if (e.target.id === "post_content") {
      this.setState({
        name: "content",
        value: document.querySelector("#post_content").value,
      });
    }
    await checkField();
  });

  const checkField = async () => {
    let btn = document.querySelector("#edit_btn");
    if (
      this.state.img !== "" &&
      this.state.title !== "" &&
      this.state.content !== ""
    ) {
      btn.classList.add("active");
      return;
    } else {
      btn.classList.remove("active");
      return;
    }
  };

  const selectPostDetail = async () => {
    const res = await getPostDetail(p_id);
    if (res.success) {
      this.setState({ name: "image", value: res.data.post.image });
      this.setState({ name: "title", value: res.data.post.title });
      this.setState({
        name: "content",
        value: res.data.post.content,
      });
    }
    new Header({ $target: $page, type: "detail" });
    $page.innerHTML += `<div class='edit_inner'>
    <img src="${this.state.image}" alt="">
    <div class="input_wrap">
      <label class="input_label">제목</label>
      <input id="post_title" placeholder="글 제목을 작성해주세요." value="${this.state.title}">
    </div>
    <div class="input_wrap">
      <label class="input_label">내용</label>
      <textarea id="post_content" placeholder="글 내용을 작성해주세요.">${this.state.content}</textarea>
      </div>
    </div>
    <div class="btn_wrap">
      <div id="edit_btn" class="active">수정하기</div>
    </div>
    `;
  };

  selectPostDetail();
}
