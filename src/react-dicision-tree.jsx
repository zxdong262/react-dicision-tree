import React, {PropTypes} from 'react'
import _ from 'lodash'
import {Spin, Tabs, Icon, Tooltip, Radio, Row, Col} from 'antd'
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
const conditionMap = {
  greater: '>',
  less_equals: '≤'
}

export default class ResultTreeModel extends React.Component {

	static propTypes = {
		data: PropTypes.object.isRequired,
    showAllChildren: PropTypes.bool,
    caretRender: PropTypes.func,
    conditionRender: PropTypes.func,

	}

	static default = {
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
    let cls = 'd-tree-condition iblock color-grey elli'
    return (
      <span>
        <span className="d-tree-condition-line" />
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

  renderCaret = (side, hasChildren, id) => {
    if (side === 1 || !hasChildren) return null
    let visible = this.state.showChildrenMap[id]
    let title = visible ? '收起' : '展开'
    let type = visible ? 'caret-up' : 'caret-down'
    return (
      <Tooltip title={title}>
        <Icon
          type={type}
          className="mg1r pointer color-grey iblock"
          onClick={() => this.toggleChildrenVisible(id)}
        />
      </Tooltip>
    )
  }

  renderLabel = label => {
    let labelDom
    if (label === 'Y') {
      labelDom = <span className="color-green">{label}</span>
    } else if (label === 'N') {
      labelDom = <span className="color-red">{label}</span>
    } else {
      labelDom = labelText
    }
    return
  }

  recDicisionTree = (root, level = 0, className = '', condition, side = '', parentId = '') => {
    let {showChildrenMap} = this.state
    let id = parentId + '-' + level + '_' + side
    let {children, label} = root
    let labelText = label || _.get(children, '[0].condition.attributeName')
    let hasChildren = children.length
    let childrenVisible = showChildrenMap[id]
    let cls = 'd-tree-cell ' +
      `d-tree-lv${level}` +
      ` ${className} ${hasChildren ? 'has-children' : 'no-children'}` +
      `${childrenVisible ? ' d-tree-children-visible' : ''}`

    let labelDom
    if (label === 'Y') {
      labelDom = <span className="color-green">{label}</span>
    } else if (label === 'N') {
      labelDom = <span className="color-red">{label}</span>
    } else {
      labelDom = labelText
    }
    
    return (
      <div className={cls}>
        <div>
          <span className="d-tree-label">
            {condition && this.renderCondition(condition)}
            <span className="d-tree-label-text iblock elli">
              {this.renderCaret(side, hasChildren, id)}
              <Tooltip title={labelText}>
                <b>{labelDom}</b>
              </Tooltip>
            </span>
          </span>
        </div>
        {
          hasChildren ? this.recDicisionTree(
            children[0].child,
            level + 1,
            'd-tree-child d-tree-cell-0',
            children[0].condition,
            0,
            id
          ) : null
        }
        {
          hasChildren ? this.recDicisionTree(
            children[1].child,
            level + 1,
            'd-tree-child d-tree-cell-1',
            children[1].condition,
            1,
            id
          ) : null
        }
      </div>
    )
  }

  render () {
    return <div className="tree-wrapper">{this.renderTree()}</div>
  }

}