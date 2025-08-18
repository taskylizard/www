import 'mdast-util-directive'
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'
import { toHast } from 'mdast-util-to-hast'
import type { Root } from 'mdast'

const styles = {
	info: {
		base: 'border-info-7 bg-info-3 text-info-12',
		title: 'text-info-11'
	},
	tip: {
		base: 'border-tip-7 bg-tip-3 text-tip-12',
		title: 'text-tip-11'
	},
	warning: {
		base: 'border-warning-7 bg-warning-3 text-warning-12',
		title: 'text-warning-11'
	},
	danger: {
		base: 'border-danger-7 bg-danger-3 text-danger-12',
		title: 'text-danger-11'
	},
	details: {
		base: 'border-details-7 bg-details-3 text-details-12',
		title: 'text-gray-11'
	}
} as const

export function remarkAlerts() {
	return (tree: Root) => {
		visit(tree, (node: any) => {
			if (node.type !== 'containerDirective') return
			if (node.name !== 'alert') return

			const type = (node.attributes?.type as keyof typeof styles) || 'info'
			const title =
				(node.attributes?.title as string) ??
				(type === 'details'
					? 'Details'
					: type.charAt(0).toUpperCase() + type.slice(1))

			const data = node.data || (node.data = {})
			const s = styles[type]

			if (type === 'details') {
				const element = h(
					'details',
					{ class: `not-prose custom-block ${s.base}` },
					h('summary', { class: `custom-block-title ${s.title}` }, title),
					h('p', {}, (toHast(node, { clobberPrefix: '' }) as any).children)
				)
				data.hName = element.tagName
				data.hProperties = element.properties
				data.hChildren = element.children
			} else {
				const element = h(
					'div',
					{ class: `not-prose custom-block ${s.base}` },
					h('p', { class: `custom-block-title ${s.title}` }, title),
					h('p', {}, (toHast(node, { clobberPrefix: '' }) as any).children)
				)
				data.hName = element.tagName
				data.hProperties = element.properties
				data.hChildren = element.children
			}
		})
	}
}
