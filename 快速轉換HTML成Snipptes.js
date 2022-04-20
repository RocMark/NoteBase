/* eslint-disable */
const tpl = '${1:Text}' // ${tpl}

const tStr = `
<template>
  <div>
    $1
  </div>
</template>
`


compiled('tpl',tStr)



// HTML Snippets 無法用於輸入 class name

function compiled(cmd,str) {
  const compiledStr = str.trim().replace(/"|'/g, '\\"').replace(/>\s\s\s/g, '>\\n\\t').replace(/>\s</g, '>\\n<').replace(/\\t\s\s</g, '\\t\\t<')
  const snippets = `
  "${cmd}": {
    "prefix": "${cmd}",
    "body": [
      "${compiledStr}",
    ],
  },`
  console.log(snippets)
}
