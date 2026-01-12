import { visit } from 'unist-util-visit'
import path from 'path'

const defaultClass = 'mx-auto max-w-md'

export default function remarkCustom(options = {}) {

  return (tree, file) => {
    const filename = file.filename || ''
    const parts = filename.split('/')

    // Determine folder type
    let folder = 'manual' // default
    if (parts.includes('development')) folder = 'development'
    else if (parts.includes('manual')) folder = 'manual'

    const manualIndex = parts.indexOf('manual')
    const version = manualIndex !== -1 ? parts[manualIndex + 1] : 'master'

    visit(tree, (node) => {
      // --- IMAGE HANDLING ---
      if (node.type === 'image' && node.url) {
        // rewrite URL
        const imageName = path.basename(node.url)
        if (folder === 'manual') {
          node.url = `/images/manual/${version}/${imageName}`
        } else if (folder === 'development') {
          node.url = `/images/development/${imageName}`
        } else {
          node.url = `/images/${folder}/${imageName}`
        }

        node.data ||= {}
        node.data.hProperties ||= {}

        // Parse $class="..." and other pseudo-attributes
        const attrRegex = /(\$class|width|height|id)="([^"]+)"/g
        let match
        while ((match = attrRegex.exec(node.alt)) !== null) {
          const [_, key, value] = match
          if (key === '$class') {
            node.data.hProperties.className = value.trim().split(/\s+/)
          } else {
            node.data.hProperties[key] = value
          }
        }

        // Remove pseudo-attributes from alt text
        node.alt = node.alt.replace(/(\$class|width|height|id)="[^"]+"/g, '').trim()

        // Default class if none
        if (!node.data.hProperties.className) {
          node.data.hProperties.className = defaultClass
        }
      }

      // --- LINK HANDLING ---
      if (node.type === 'link') {
        if (node.url?.startsWith('xref:')) {
          const target = node.url.replace(/^xref:/, '')
          if (folder === 'manual') {
            node.url = `/manual/${version}/${target}`
          } else if (folder === 'development') {
            node.url = `/development/${target}`
          } else {
            node.url = `/${folder}/${target}`
          }
        } else if (/^(https?:)?\/\//.test(node.url)) {
          // External link => new tab
          node.data ||= {};
          node.data.hProperties ||= {};
          node.data.hProperties.target = '_blank';
          node.data.hProperties.rel = 'noopener noreferrer';
        }
      }
    })
  }
}