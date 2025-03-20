const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const displayText = document.getElementById('displayText');
const p = document.getElementById('p');
const but = document.getElementById('but');
const title = document.getElementById('title');

button1.addEventListener('click', () => {
  button1.classList.add('active');
  button2.classList.remove('active');
  title.textContent = 'Астрахань Цифровая';
  displayText.textContent = 'Природа, рыбалка и разговоры у костра про технологии будущего. Уникальная возможность для топ-менеджеров из России и дружественных стран объединить отдых и деловые переговоры в формате незабываемых путешествий в дельте Волги.';
  p.textContent = 'Подписывайтесь';
  p.style.fontSize = '15px'
  but.textContent = 'Подробнее';
  button1.textContent = "РУ";
  button2.textContent = "FA";
});

button2.addEventListener('click', () => {
  button2.classList.add('active');
  button1.classList.remove('active');
  title.textContent = 'استراخان دیجیتال';
  displayText.textContent = 'طبیعت، ماهیگیری و گفتگو در کنار آتش در باره ی تکنولوژی‌های اینده. این فرصت منحصر به فرد برای مدیران ارشد از روسیه ‌‌و کشورهای دوستانه است تا بتوانند استراحت و‌ مذاکرات تجاری در قالب سفر فراموش نشدنی در دلتای ولگا  ادغام کنند.';
  p.textContent = 'مشترک شوید';
  p.style.fontSize = '30px'
  but.textContent = 'جزئیات بیشتر';
  button2.textContent = "FA";
  button1.textContent = "РУ";
});