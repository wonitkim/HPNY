import { addComment, deletePost, getPostDetail } from "./apis/api.js";
import CommentList from "./CommentList.js";
import Header from "./Header.js";
import { routeChange } from "./router.js";

export default function PostDetailPage({ $target, p_id }) {
  const $page = document.createElement("section");
  $page.id = "post_detail_page";

  this.render = () => {
    $target.appendChild($page);
  };

  this.setState = (new_state) => {
    this.state = new_state;
  };

  const dateToStr = (date) => {
    let year = date.getFullYear();
    let month =
      date.getMonth() > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    let day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
    return year + "." + month + "." + day;
  };

  $page.addEventListener("click", async (e) => {
    if (
      e.target.id === "leave_comment_btn" &&
      e.target.classList.contains("active")
    ) {
      let comment = e.target.previousElementSibling.value;
      await leaveComment(comment);
    }

    if (e.target.id === "post_delete") {
      let option = { method: "DELETE" };
      let result = await deletePost(p_id, option);
      if (result.code === 200) routeChange("/", null, "re");
    }

    if (e.target.id === "post_edit") {
      routeChange(`/edit/${p_id}`);
    }
  });

  $page.addEventListener("keyup", async (e) => {
    let btn = document.querySelector("#leave_comment_btn");
    let input = document.querySelector("#comment_input");

    if (e.target.id === "comment_input" && e.key !== "Enter") {
      if (e.target.value === "") btn.classList.remove("active");
      else btn.classList.add("active");
    } else if (e.key === "Enter") {
      if (btn.classList.contains("active")) {
        await leaveComment(input.value);
      } else {
        return alert("댓글을 등록해주세요.");
      }
    }
  });

  const getPost = async () => {
    const res = await getPostDetail(p_id);
    this.setState(res.success ? res.data : null);
  };

  const leaveComment = async (comment) => {
    let option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: comment }),
    };
    let result = await addComment(p_id, option);
    if (result.code === 201) {
      // await getPost();
      // $page.querySelector('.post_comment_wrap').innerHTML = ``;
      // new CommentList({ $target: $page.querySelector('.post_comment_wrap'), p_id: p_id, init: this.state.comments });
      // //댓글 입력란 초기화 및 추가된 댓글 보이도록
      // document.querySelector('#comment_input').value = '';
      location.reload();
      document.querySelector(".post_detail_inner").scrollTop =
        document.querySelector(".post_detail_inner").clientHeight;
    } else {
      return alert("댓글을 등록하지 못했습니다. \n다시 시도해주세요.");
    }
  };

  const selectPostDetail = async () => {
    await getPost();
    new Header({ $target: $page, type: "detail" });
    let date = new Date(this.state.post.createdAt);
    $page.innerHTML += `<div class="post_detail_inner">
      <artice class="post_article">
        <img src="${this.state.post.image}" alt="">
        <div class="post_article_inner">
          <p class="title">${this.state.post.title}</p>
          <span class="date">${dateToStr(date)}</span>
          <div class="content_wrap">
            <div class="content">${this.state.post.content}</div>
            <div class="article_btn_wrap">
              <div id="post_edit"></div> 
              <div id="post_delete"></div>
            </div>
          </div>
        </div>
      </artice>
      <div class="post_comment_wrap">
      </div>
    </div>
    <div class="btn_wrap">
      <input id="comment_input">
      <div id="leave_comment_btn">
        <span></span>
      </div>
    </div>
    `;
    new CommentList({
      $target: $page.querySelector(".post_comment_wrap"),
      p_id: p_id,
      init: this.state.comments,
    });
  };

  selectPostDetail();
}
