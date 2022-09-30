//   variables

let btn = document.querySelector("#new-qoute");
let qoute = document.querySelector(".qoute");
let person = document.querySelector(".person");

const qoutes = [
  {
    qoute: `“You can get everything in life you want if you will just help enough other people get what they want.”`,
    person: `Zig Ziglar`,
  },
  {
    qoute: `“Inspiration does exist, but it must find you working.”`,
    person: `Pablo Picasso`,
  },
  {
    qoute: `“Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.”`,
    person: `Angela Bassett`,
  },
  {
    qoute: `“Show up, show up, show up, and after a while the muse shows up, too.” `,
    person: `Isabel Allende`,
  },
  {
    qoute: `“Don't bunt. Aim out of the ballpark. Aim for the company of immortals.”`,
    person: `David Ogilvy`,
  },
  {
    qoute: `“I have stood on a mountain of no’s for one yes.”`,
    person: `Barbara Elaine Smith`,
  },
  {
    qoute: `“If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.” `,
    person: `Tobias Lütke`,
  },
  {
    qoute: `"Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium quo fugiat natus vel voluptate temporibus blanditiis
            explicabo deleniti nisi. Impedit repudiandae possimus quae dolor
            laudantium."`,
    person: `Mahtma Gandhi8`,
  },
  {
    qoute: ` “The best way out is always through.”`,
    person: `Robert Frost`,
  },
  {
    qoute: ` “The battles that count aren't the ones for gold medals. The struggles within yourself—the invisible, inevitable battles inside all of us—that's where it's at." `,
    person: `Jesse Owens`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * qoutes.length);

  qoute.innerText = qoutes[random].qoute;
  person.innerText = qoutes[random].person;
});
