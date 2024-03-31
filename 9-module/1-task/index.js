export default function promiseClick(button) {
  let promise = new Promise (function(resolve, reject) {
    button.addEventListener('click', (event) => {
      resolve(event);
    }, {once: true});
  });
  return promise;
}
