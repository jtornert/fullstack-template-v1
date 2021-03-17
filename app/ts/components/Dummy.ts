export default function (text: string) {
  const dummy = document.createElement('p');
  dummy.classList.add('dummy');
  dummy.style.backgroundColor = 'gainsboro';
  dummy.style.padding = '1rem';
  dummy.innerText = text;

  return dummy;
}
