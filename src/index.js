const frontmatter = require('front-matter')
const marked = require('marked')

function fetchAndWritemd(mdFilePath) {
	fetch(mdFilePath).then(x => x.text())
		.then(rawMD => {
			var mdfm = frontmatter(rawMD)
			var mddiv = document.createElement('div') 
			mddiv.innerHTML = `${mdFilePath} <br/> ${mdfm.frontmatter || 'no front matter'} <br/> ${marked(mdfm.body)} <hr/>`
			document
				.querySelector('#app')
				.appendChild(mddiv)
		})
}

fetchAndWritemd('test-files/basic-md.md')
fetchAndWritemd('test-files/js-in-md.md')
fetchAndWritemd('test-files/yaml-fm1.md')
fetchAndWritemd('test-files/yaml-fm2.md')