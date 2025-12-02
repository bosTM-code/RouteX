// src/data/teamData.js
import Coach1 from "../assets/coach1.jpg";
import Coach2 from "../assets/coach2.jpg";
import Coach3 from "../assets/coach3.jpg";

// якщо немає реальних фото для решти – можна залишити null,
// картка покаже сірий плейсхолдер

export const teamMembers = [
  {
    id: "olena-kovalenko",
    name: "Олена Коваленко",
    role: "Візовий консультант (США, Канада)",
    photo: Coach1,
    responsibility: "Підбір візових програм, підготовка до співбесіди",
    experience: "8 років",
    email: "olena@routex.com",
    phone: "+38 (067) 000-00-01",
    socials: {
      x: "https://x.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://linkedin.com/",
    },
    bio: [
      "Олена супроводжує клієнтів у процесі отримання студентських, туристичних та робочих віз до США й Канади.",
      "Спеціалізується на складних кейсах, повторних подачах та ситуаціях із відмовами.",
    ],
    skills: [
      { label: "Підготовка до співбесіди", value: 90 },
      { label: "Аналіз візових ризиків", value: 85 },
      { label: "Підготовка документів", value: 92 },
    ],
  },
  {
    id: "ihor-shevchenko",
    name: "Ігор Шевченко",
    role: "Імміграційний юрист (ЄС)",
    photo: Coach2,
    responsibility: "Юридичний супровід міграційних кейсів до країн ЄС",
    experience: "10 років",
    email: "ihor@routex.com",
    phone: "+38 (067) 000-00-02",
    socials: {
      x: "https://x.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://linkedin.com/",
    },
    bio: [
      "Ігор працює з програмами Blue Card, робочими візами та воззʼєднанням сімʼї в Європі.",
      "Готує юридичні висновки, перевіряє договори й слідкує за змінами законодавства в міграційній сфері.",
    ],
    skills: [
      { label: "Міграційне право ЄС", value: 95 },
      { label: "Супровід бізнес-клієнтів", value: 88 },
      { label: "Судові оскарження відмов", value: 80 },
    ],
  },
  {
    id: "maria-lytvin",
    name: "Марія Литвин",
    role: "Карʼєрний коуч для релокації",
    photo: Coach3,
    responsibility: "Карʼєрні стратегії та пошук роботи за кордоном",
    experience: "7 років",
    email: "maria@routex.com",
    phone: "+38 (067) 000-00-03",
    socials: {
      x: "https://x.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://linkedin.com/",
    },
    bio: [
      "Марія допомагає клієнтам адаптувати резюме й профіль у LinkedIn під ринки ЄС та Північної Америки.",
      "Готує до співбесід, будує план професійного розвитку після релокації.",
    ],
    skills: [
      { label: "Карʼєрні стратегії", value: 90 },
      { label: "Підготовка резюме", value: 93 },
      { label: "Підготовка до інтервʼю", value: 88 },
    ],
  },
  {
    id: "ronald-richards",
    name: "Рональд Річардс",
    role: "Візовий аналітик",
    photo: null,
    responsibility: "Аналіз міграційних програм і шансів клієнта",
    experience: "6 років",
    email: "ronald@routex.com",
    phone: "+38 (067) 000-00-04",
    socials: {},
    bio: [
      "Відповідає за первинний аналіз анкет клієнтів і формування попередніх візових стратегій.",
    ],
    skills: [
      { label: "Аналітика програм", value: 85 },
      { label: "Оцінка ризиків", value: 82 },
    ],
  },
  {
    id: "annette-black",
    name: "Анетт Блек",
    role: "Координатор подач",
    photo: null,
    responsibility: "Організація подачі документів у консульства",
    experience: "5 років",
    email: "annette@routex.com",
    phone: "+38 (067) 000-00-05",
    socials: {},
    bio: [
      "Координує строки подачі, запис у візові центри та контроль комплектності досьє.",
    ],
    skills: [
      { label: "Організація процесів", value: 88 },
      { label: "Комунікація з клієнтами", value: 90 },
    ],
  },
  {
    id: "cody-fisher",
    name: "Коді Фішер",
    role: "Web-дизайнер",
    photo: null,
    responsibility: "Дизайн особистих сторінок експертів та клієнтських кабінетів",
    experience: "4 роки",
    email: "cody@routex.com",
    phone: "+38 (067) 000-00-06",
    socials: {},
    bio: [
      "Відповідає за візуальну частину особистих кабінетів та внутрішніх сервісів для клієнтів.",
    ],
    skills: [
      { label: "UI/UX дизайн", value: 87 },
      { label: "Прототипування", value: 80 },
    ],
  },
];

export function getTeamMemberById(id) {
  return teamMembers.find((m) => m.id === id);
}
