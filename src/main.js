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
    descriotion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    imgPath: './src/assets/img/2.jpg',
    username: 'Dolorem',
    descriotion: 'Dolorem at nesciunt adipisci rem.'
  },
  {
    imgPath: './src/assets/img/3.jpg',
    username: 'Numquam',
    descriotion: 'Numquam, vel.'
  },
  {
    imgPath: './src/assets/img/4.jpg',
    username: 'Porro',
    descriotion: 'Porro eligendi reiciendis voluptatibus dolor temporibus natus et, vero tempore est.'
  },
  {
    imgPath: './src/assets/img/5.jpg',
    username: 'Repellendus',
    descriotion: 'Repellendus ut eos natus voluptates magni fugit, ipsam fugiat error deleniti distinctio rem eveniet eligendi rerum minima hic nostrum nihil dolorum sunt aspernatur adipisci!'
  },
  {
    imgPath: './src/assets/img/6.jpg',
    username: 'Voluptatem',
    descriotion: 'Voluptatem delectus beatae ullam quia voluptate quasi ipsa.'
  }
]

const usersNode = userList.reduce((acc, item) => {
  const currentUser = [
    h('article.userList__itemContainer', null, [
      h('img.userList__image', {props: {
        src: item.imgPath
      }}),
      h('div.userList__description', null, [
        h('h3.userList__username', item.username),
        h('span', item.descriotion)
      ])
    ])
  ]
  acc = acc.concat(currentUser)
  return acc
}, [] )


const vnode = h("section.userList", null, usersNode);

patch(app, vnode);