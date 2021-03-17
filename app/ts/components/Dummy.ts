export default function (text) {
  const dummy = document.createElement('p');
  dummy.classList.add('dummy');
  dummy.innerText = text;

  return dummy;
}
