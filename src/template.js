import {row, col, css} from './utils'

//function title(block) {
    // const tag = block.options.tag ?? 'h1'
    // const styles = block.options.styles

    // const {tag, styles} = block.options
    // return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))

    //
    // return `
    //     <div class="row">
    //         <div class="col-sm">
    //             <h1>${block.value}</h1>
    //         </div>
    //     </div>
    //
//}

// function text(block) {
//     return row(col(`<p>${block.value}</p>`), css(block.options.styles))
//     // return  `
//     //     <div class="row">
//     //         <div class="col-sm">
//     //            ${block.value}
//     //         </div>
//     //     `
// }

// function columns(block) {
//     //  let html = ''
//     //  block.value.forEach(item => {
//     //      html +=  `
//     //           <div class="col-sm">
//     //              ${item}
//     //          </div>
//     //           `
//     // })
//     // const html = block.value.map(item => `<div class="col-sm">${item}</div> `)
//
//     const html = block.value.map(col).join('')
//     return  row(html, css(block.options.styles))
//
// }

// function image(block) {
//     return row(col(`<img src = "${block.value}" />`), css(block.options.styles))
//     // return `
//     // <div class = "row">
//     //
//     // </div>    `
//
// }
//
// export const templates = {
//     title,
//     text,
//     columns,
//     image
// }