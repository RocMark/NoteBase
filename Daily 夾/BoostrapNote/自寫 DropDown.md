# 自寫 DropDown

# HTML
```html
<div class="dropdown">
  <button class="mk-drop-btn btn btn-info dropdown-toggle" type="button">
    Text
  </button>
  <ul class="mk-drop-menu mk-drop-open">
    <li>Lorem, ipsum dolor.</li>
    <li>Item1</li>
    <li>Item1</li>
  </ul>
</div>
```

# JS
```js
  let mkDropBtn = document.querySelectorAll('.mk-drop-btn')
  let mkDropMenu = document.querySelectorAll('.mk-drop-menu')
  mkDropBtn.forEach((el) => { el.addEventListener('click', mkDropMenuEvt) })
  function mkDropMenuEvt(e) { e.target.nextElementSibling.classList.toggle('mk-drop-open') }
  window.addEventListener('click', closeMkDropMenu)
  function closeMkDropMenu(e) {
    if (!e.target.classList.contains('mk-drop-btn')) {
      mkDropMenu.forEach((el) => { el.classList.remove('mk-drop-open') })
    }
  }
```
# CSS
```css
  .mk-drop-menu {
    display: none;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate3d(2px, 42px, 0px);
    border: 0.5px solid #eee;
    list-style-type: none;
    padding-left: 0;
    background: #FFF;
    color: #212529
  }

  .mk-drop-menu>li {
    display: block;
    padding: 0.25rem 0.75rem;
    cursor: pointer;
    margin-bottom: 2px;
  }

  .mk-drop-menu>li:hover {
    background-color: #eee;
  }

  .mk-drop-open {
    display: block;
    z-index: 100;
  }
```