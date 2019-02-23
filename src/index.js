const frontmatter = require('front-matter')
const marked = require('marked')

function fetchAndWritemd(mdFilePath) {
	var mddiv = document.createElement('div') 

	fetch(mdFilePath).then(x => {
		if(!x.ok) {
			mddiv.innerHTML = `${mdFilePath} DID NOT LOAD [${x.status} : ${x.statusText}] <hr/>`
		} else {
			return x.text()
		}
	})
		.then(rawMD => {
			if(rawMD) {
				var mdfm = frontmatter(rawMD)
				mddiv.innerHTML = `${mdFilePath} <br/> ${mdfm.frontmatter || 'no front matter'} <br/> ${marked(mdfm.body)} <hr/>`
			}
			document
				.querySelector('#app')
				.appendChild(mddiv)
		})
}

fetchAndWritemd('test-files/basic-md.md')
fetchAndWritemd('test-files/yaml-fm1.md')
fetchAndWritemd('test-files/yaml-fm2.md')
fetchAndWritemd('test-files/yaml-fm1.notmd')