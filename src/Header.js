export default function Header({ $target, type }) {
  const $header = document.createElement('header');
  $target.appendChild($header);
  this.state = type;

  this.render = () => {
    if (!this.state) {
      console.log('no_state');
      return;
    }

    const header_element = { main: `<h1>HPNY</h1>`, detail: `<span id='back_btn'></span><h1>HPNY</h1>` };
    $header.innerHTML = header_element[this.state];
  };

  this.render();
}
