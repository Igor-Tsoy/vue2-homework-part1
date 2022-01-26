import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

import './assets/style.css';

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

const app = document.getElementById("app");

const userList = [
  {
    imgPath: './src/assets/img/1.jpg',
    username: 'Lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    imgPath: './src/assets/img/2.jpg',
    username: 'Dolorem',
    description: 'Dolorem at nesciunt adipisci rem.'
  },
  {
    imgPath: './src/assets/img/3.jpg',
    username: 'Numquam',
    description: 'Numquam, vel.'
  },
  {
    imgPath: './src/assets/img/4.jpg',
    username: 'Porro',
    description: 'Porro eligendi reiciendis voluptatibus dolor temporibus natus et, vero tempore est.'
  },
  {
    imgPath: './src/assets/img/5.jpg',
    username: 'Repellendus',
    description: 'Repellendus ut eos natus voluptates magni fugit, ipsam fugiat error deleniti distinctio rem eveniet eligendi rerum minima hic nostrum nihil dolorum sunt aspernatur adipisci!'
  },
  {
    imgPath: './src/assets/img/6.jpg',
    username: 'Voluptatem',
    description: 'Voluptatem delectus beatae ullam quia voluptate quasi ipsa.'
  }
]

function getImageUrl(index) {
  return new URL(`./assets/img/${index + 1}.jpg`, import.meta.url).href
}


const usersNode = userList.map((currentUser, index) => {
  const userNode = [
    h('article.userList__itemContainer', null, [
      h('img.userList__image', {props: {
        src: getImageUrl(index)
      }}),
      h('div.userList__description', null, [
        h('h3.userList__username', currentUser.username),
        h('span', currentUser.description)
      ])
    ])
  ]
  return userNode[0]
})

const vnode = h("section.userList", null, usersNode);

patch(app, vnode);