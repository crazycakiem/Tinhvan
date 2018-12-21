
const isLeaf = (data, prop) => {
    return !(Array.isArray(data[prop]) && data[prop].length > 0)
}

// node
export const renderNode = (h, data, context) => {
   // debugger;
    const { props } = context
    const cls = ['org-tree-node']
    const childNodes = []
    const children = data[props.props.children]

    if (isLeaf(data, props.props.children)) {
        cls.push('is-leaf')
    } else if (props.collapsable && !data[props.props.expand]) {
        cls.push('collapsed')
    }
    childNodes.push(renderLabel(h, data, context))

    if (!props.collapsable || data[props.props.expand]) {
        childNodes.push(renderChildren(h, children, context))
    }

    return h('div', {
        domProps: {
            className: cls.join(' ')
        }
    }, childNodes)
}
export const renderBtn = (h, data, context) => {
    const { props } = context
    const expandHandler = context.listeners['on-expand']

    let cls = ['org-tree-node-btn']

    if (data[props.props.expand]) {
        cls.push('expanded')
    }

    return h('span', {
        domProps: {
            className: cls.join(' ')
        },
        on: {
            click: e => {
                e.stopPropagation()
                expandHandler && expandHandler(data)
            }
        }
    })
}

export const renderSpan = (h, data, clickHandler1,clickHandler2,clickHandler3) => {
    return h('div', { 'class': 'contain' }, [
        h('span', {
            domProps: {
                className: 'no1'
            },
            style: {  },
            on: {
                click: e => clickHandler1 && clickHandler1(e, data)
            }
        },
            data.status),
        h('span',
            {
                domProps: {
                    className: 'no2'
                },
                style: {  },
                on: {
                    click: e => clickHandler2 && clickHandler2(e, data)
                }
             },
            data.order),
        h('span',
            { 
                domProps: {
                    className: 'no3'
                },
                style: {  },
                on: {
                    click: e => clickHandler3 && clickHandler3(e, data)
                }
             },
            data.order)
    ])
}





// 创建 label 节点
export const renderLabel = (h, data, context) => {
    const { props } = context
    const label = data[props.props.label]
    const renderContent = props.renderContent
    const clickHandler = context.listeners['on-node-click']
    const clickChildElm1 = context.listeners['on-child1-click']
    const clickChildElm2 = context.listeners['on-child2-click']
    const clickChildElm3 = context.listeners['on-child3-click']
    const childNodes = []
    if (typeof renderContent === 'function') {
        let vnode = renderContent(h, data)
        vnode && childNodes.push(h('div', 
            {
                domProps: {
                    className: 'lb'
                },
                style: {  },
                on: {
                    click: e => clickHandler && clickHandler(e, data)
                }
             },
        
            vnode))
        childNodes.push(renderSpan(h,data,clickChildElm1,clickChildElm2,clickChildElm3))
    } else {
        childNodes.push(label)
    }

    if (props.collapsable && !isLeaf(data, props.props.children)) {
        childNodes.push(renderBtn(h, data, context))
    }

    const cls = ['org-tree-node-label-inner']
    let { labelWidth, labelClassName } = props
    if (typeof labelWidth === 'number') {
        labelWidth += 'px'
    }
    if (typeof labelClassName === 'function') {
        labelClassName = labelClassName(data)
    }
    labelClassName && cls.push(labelClassName)
    return h('div', {
        domProps: {
            className: 'org-tree-node-label'
        }
    }, [h('div', {
        domProps: {
            className: cls.join(' ')
        },
        style: { width: labelWidth },
        on: {
            // click: e => clickHandler && clickHandler(e, data)
        }
        }, childNodes)
        ])
}

// 创建 node 子节点
export const renderChildren = (h, list, context) => {
    if (Array.isArray(list) && list.length) {
        const children = list.map(item => {
            return renderNode(h, item, context)
        })
        return h('div', {
            domProps: {
                className: 'org-tree-node-children'
            }
        }, children)
    }
    return ''
}

export const render = (h, context) => {
    const { props } = context
    return renderNode(h, props.data, context)
}

export default render
