import { getUnsplash, getUploadPost } from "./apis/api.js";
import Header from "./Header.js";
import { routeChange } from "./router.js";

export default function UploadPage({ $target }) {
  const $page = document.createElement("section");
  $page.id = "upload_page";

  this.state = { image: "", title: "", content: "" };
  this.setState = (new_state) => {
    this.state, (this.state[new_state.name] = new_state.value);
  };

  $page.addEventListener("click", async (e) => {
    if (
      e.target.id === "img_upload_btn" &&
      !e.target.classList.contains("done")
    ) {
      const data = await getUnsplash();
      this.setState({ name: "image", value: data.urls.regular });
      let img_btn = document.querySelector("#img_upload_btn");
      img_btn.innerHTML = ``;
      img_btn.style.backgroundImage = `url('${this.state.image}')`;
      img_btn.style.backgroundSize = "cover";
      img_btn.style.backgroundPostion = "center";
      img_btn.classList.add("done");
      await checkField();
    }

    if (e.target.id === "upload_btn" && e.target.classList.contains("active")) {
      let option = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state),
      };
      let result = await getUploadPost(option);
      if (result) {
        if (result.code === 201) {
          routeChange("/");
        } else {
          return alert(result.msg);
        }
      } else {
        alert("게시물을 등록하지 못했습니다. \n다시 시도해주세요.");
        return;
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
    let btn = document.querySelector("#upload_btn");
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

  this.render = () => {
    new Header({ $target: $page, type: "detail" });
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
