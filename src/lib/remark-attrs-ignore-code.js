import remarkAttrs from 'remark-attrs'
import { visit } from 'unist-util-visit'

export default function remarkAttrsIgnoreCode(options = {}) {
  const attrs = remarkAttrs(options)

  return (tree, file) => {
    visit(tree, (node) => {
      if (node.type === 'code' || node.type === 'inlineCode') {
        return visit.SKIP
      }
    })

    attrs(tree, file)
  }
}
