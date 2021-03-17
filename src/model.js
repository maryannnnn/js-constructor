//import image from './assets/image.png'

// export const model = [
//     {type: 'title', value: 'Heloo wold', options: {
//         tag: 'h1',
//             styles: {
//                 background: 'linear-gradient(to right, #ff0099, #493240)',
//                 color: 'green',
//                 padding: '1.5rem',
//                 'text-align': 'center'
//             }
//         } },
//     {type: 'text', value: 'here some text'},
//     {type: 'columns', value: [
//             '1111111111111',
//             '22222222222',
//             '333333333',
//             '4444444'
//         ]},
//     {type: 'image', value: image}
// ]

import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './class/blocks'

const text = `
Крутые видео и уроки по JavaScript тут: . Тут ты найдешь исчерпывающую информацию по любым аспектам языка, любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!
`

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: 'green',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        'Приложение на чистом JavaScript, без использования библиотек',
        'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
        'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]