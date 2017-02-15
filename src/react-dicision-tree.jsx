import React, {PropTypes} from 'react'

export default class DicisionTree extends React.Component {

	static propTypes = {
		data: PropTypes.object.isRequired,
    showAllChildren: PropTypes.bool,
    caretRender: PropTypes.func,
    conditionRender: PropTypes.func,
    renderYesLabel: PropTypes.func,
    renderNoLabel: PropTypes.func,
    renderTitle: PropTypes.func
	}

	static defaultProps = {
    showAllChildren: false
	}

  state = {
    showChildrenMap: {}
  }

  onChange = e => {
    this.setState({
      tab: e.target.value
    })
  }

  renderTree = () => {
    let {data} = this.props
    return this.recDicisionTree(data)
  }

  renderCondition = (condition) => {

    let {splitType, value} = condition
    let cls = 'dtree-condition'
    return (
      <span>
        <span className="dtree-condition-line" />
        <span className={cls}>{conditionMap[splitType]} {value}</span>
      </span>
    )

  }

  toggleChildrenVisible = id => {
    let showChildrenMap = _.cloneDeep(this.state.showChildrenMap)
    showChildrenMap[id] = !showChildrenMap[id]
    this.setState({
      showChildrenMap
    })
  }

  renderCaret = (side, children, id, toggleChildrenVisible) => {
    if (side === 1 || !children) return null
    let visible = this.state.showChildrenMap[id]
    let title = visible ? '收起' : '展开'
    let type = visible ? '▲' : '▲'
    return (
      <span
        title={title}
        type={type}
        className="dtree-caret"
        onClick={() => toggleChildrenVisible(id)}
      >{type}</span>
    )
  }

  renderYesLabel = label => {
    return <span className="dtree-color-green">{label}</span>
  }

  renderNoLabel = label => {
    return <span className="dtree-color-red">{label}</span>
  }

  renderTitle = (labelText, labelDom) => {
    return <b title={labelText}>{labelDom}</b>
  }

  recDicisionTree = (root, level = 0, className = '', side = '', parentId = '') => {
    let {showChildrenMap} = this.state
    let {
      renderNoLabel = this.renderNoLabel,
      renderYesLabel = this.renderYesLabel,
      renderCaret = this.renderCaret,
      renderTitle = this.renderTitle
    } = this.props
    let id = parentId + '-' + level + '_' + side
    let {children, label, splitType, value} = root
    let childrenVisible = showChildrenMap[id]
    let cls = 'dtree-cell ' +
      `dtree-lv${level}` +
      ` ${className} ${chhildren ? 'has-children' : 'no-children'}` +
      `${childrenVisible ? ' dtree-children-visible' : ''}`

    let labelDom
    if (label === 'Y') {
      labelDom = renderYesLabel(label)
    } else if (label === 'N') {
      labelDom = renderNoLabel(label)
    } else {
      labelDom = label
    }
    
    return (
      <div className={cls}>
        <div>
          <span className="dtree-label">
            {condition ? this.renderCondition(condition) : null}
            <span className="dtree-label-text iblock elli">
              {renderCaret(side, children, id, this.toggleChildrenVisible)}
              {renderTitle(labelText, labelDom)}
            </span>
          </span>
        </div>
        {
          children ? this.recDicisionTree(
            children[0],
            level + 1,
            'dtree-child dtree-cell-0',
            0,
            id
          ) : null
        }
        {
          children ? this.recDicisionTree(
            children[1],
            level + 1,
            'dtree-child dtree-cell-1',
            1,
            id
          ) : null
        }
      </div>
    )
  }

  render () {
    return <div className="dtree-wrapper">{this.renderTree()}</div>
  }

}