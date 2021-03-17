import {model} from './model'
// import {templates} from './template'
import './styles/main.css'
import {Site} from './class/site'

const site = new Site('#site')
site.render(model)

// model.forEach(block => {
//    // let html = ''
//
//     // if (block.type === 'title') {
//     //     html = template.title(block)
//     // } else if (block.type === 'text') {
//     //     html = text(block)
//     // } else if (block.type === 'columns') {
//     //     html = columns(block)
//     // } else if (block.type === 'image') {
//     //     html = image(block)
//     // }
//
//     // const toHTML = templates[block.type]
//
//     // if(false) {
//     //     $site.insertAdjacentHTML('beforeend', toHTML(block))
//     // }
//     $site.insertAdjacentHTML('beforeend', block.toHTML())
// })
//
