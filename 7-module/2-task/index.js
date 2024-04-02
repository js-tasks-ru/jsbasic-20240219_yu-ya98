import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();

    this.elem.addEventListener('click', this.onClick);
    // this.title = 'Some title';
    // this.body = '<div>Some body</div>'
  }

  render() {
    this.elem = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>
    `);
  }


  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
    document.addEventListener('keydown', this.onKeyDown);

    /*let modal = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon">
            </button>
            <h3 class="modal__title">
              ${this.title}
            </h3>
          </div>
          <div class="modal__body">
          </div>
        </div>
      </div>
    `)*/
    // document.body.append(modal);

    // modal.querySelector('.modal__body').insertAdjacentHTML('afterbegin', this.body);

    // this.elem = modal;



    // this._onKeyDown = (event) => this.onKeyDown(event);


    // let closeBtn = this.elem.querySelector('.modal__close');

    /*closeBtn.addEventListener('click', () => {
      this.elem.remove();
      document.body.classList.remove('is-modal-open');
      document.onkeydown = null;
    });*/

    /*document.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        this.elem.remove();
        document.body.classList.remove('is-modal-open');
        document.onkeydown = null;
      }
    });*/


  }

  onClick = (event) => {
    if (event.target.closest('.modal__close')) {
      event.preventDefault();
      this.close();
    }
  };

  onKeyDown = (event) => {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }
  };

  setTitle(title) {
    this.elem.querySelector('.modal__title').textContent = title;

    // this.title = title;
    // if (this.elem != undefined) {
    //   this.elem.querySelector('.modal__title').innerHTML = title;
    // }
  }

  setBody(node) {
    this.elem.querySelector('.modal__body').innerHTML = '';
    this.elem.querySelector('.modal__body').append(node); // APPEND
    // this.body = node.outerHTML;
    // if (this.elem != undefined) {
    //   this.elem.querySelector('.modal__body').innerHTML = this.body;
    // }
  }

  close() {
    // document.onkeydown = null;
    document.removeEventListener('keydown', this.onKeyDown);
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
  }
}





// import createElement from '../../assets/lib/create-element.js';

// export default class Modal {
//   constructor() {
//     this.title = 'Some title';
//     this.body = '<div>Some body</div>'
//   }

//   open() {
//     let modal = createElement(`
//       <div class="modal">
//         <div class="modal__overlay"></div>
//         <div class="modal__inner">
//           <div class="modal__header">
//             <button type="button" class="modal__close">
//               <img src="/assets/images/icons/cross-icon.svg" alt="close-icon">
//             </button>
//             <h3 class="modal__title">
//               ${this.title}
//             </h3>
//           </div>
//           <div class="modal__body">
//           </div>
//         </div>
//       </div>
//     `)
//     document.body.append(modal);
//     modal.querySelector('.modal__body').insertAdjacentHTML('afterbegin', this.body);

//     this.elem = modal;

//     document.body.classList.add('is-modal-open');

//     let closeBtn = this.elem.querySelector('.modal__close');
//     closeBtn.addEventListener('click', () => {
//       this.elem.remove();
//       document.body.classList.remove('is-modal-open');
//       document.onkeydown = null;
//     });

//     document.addEventListener('keydown', event => {
//       if (event.code === 'Escape') {
//         this.elem.remove();
//         document.body.classList.remove('is-modal-open');
//         document.onkeydown = null;
//       }
//     });
//   }

//   setTitle(title) {
//     this.title = title;
//     if (this.elem != undefined) {
//       this.elem.querySelector('.modal__title').innerHTML = title;
//     }
//   }

//   setBody(node) {
//     this.body = node.outerHTML;
//     if (this.elem != undefined) {
//       this.elem.querySelector('.modal__body').innerHTML = this.body;
//     }
//   }

//   close() {
//     this.elem.remove();
//     document.body.classList.remove('is-modal-open');
//     document.onkeydown = null;
//   }
// }
