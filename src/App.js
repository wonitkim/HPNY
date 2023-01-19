import BoardPage from "./pages/BoardPage.js";
import PostDetailPage from "./pages/PostDetailPage.js";
import { init } from "./router.js";
import UploadPage from "./pages/UploadPage.js";
import EditPage from "./pages/EditPage.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = ``;

    if (pathname === "/") {
      new BoardPage({ $target }).render();
    } else if (pathname === "/upload") {
      new UploadPage({ $target }).render();
    } else if (pathname.indexOf("/post/") !== -1) {
      //게시글 구분을 위한 id 추출
      const [, , p_id] = pathname.split("/");
      new PostDetailPage({ $target, p_id }).render();
    } else if (pathname.indexOf("/edit/") !== -1) {
      const [, , p_id] = pathname.split("/");
      new EditPage({ $target, p_id }).render();
    }
  };

  init(this.route);
  this.route();

  window.addEventListener("popstate", () => {
    this.route();
  });
}
