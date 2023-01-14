export default function Header({ $target, type }) {
  const $header = document.createElement('header');
  $target.appendChild($header);
  this.state = type;

  this.setState = (new_state) => {
    this.state = new_state;
    this.render();
  };

  this.render = () => {
    if (!this.state) {
      return;
    }

    const header_element = { main: `<h1>HPNY</h1>`, detail: `<span id='back_btn'></span><h1></h1>` };
    $header.innerHTML = header_element[this.state];
  };
}
