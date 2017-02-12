
import React, { Component, PropTypes } from 'react'

class DicisionTree extends Component {

  static propTypes = {
    data: PropTypes.number.isRequired
  }

  computeLevel = (root) => {

    let lv = 0
    function recv(obj0, level) {
      let {children} = obj0
      lv = level

      if (children.length) {
        children.forEach(child => {
          recv(child.child, level + 1)
        })
      }
    }
    recv(root, 0)
    return lv

  }

  flatTree = (root) => {

    let res = {
      maxLevel: 0
    }
    function recv(obj0, level) {
      let {children, label} = obj0
      let labelText = label || _.get(children, '[0].condition.attributeName')
      let obj = {
        label: labelText,
        level
      }
      if (!res[level]) {
        res[level] = []
      }
      res[level].push(obj)
      res.maxLevel = level

      if (children.length) {
        children.forEach(child => {
          recv(child.child, level + 1)
        })
      }
    }
    recv(root, 0)
    return res
  }

  renderCondition = children => {
    return (
      <div className="d-tree-conditions">
      {
        children.map((chi, i) => {
          let {splitType, value, attributeName} = chi.condition
          let cls = `d-tree-condition d-tree-condition-${i}`
          let key = i + '_' + attributeName + '_' + value + '_' + splitType
          return (
            <span className={cls} key={key}>{splitType} {value}</span>
          )
        })
      }
      </div>
    )
  }

  recDicisionTree = (root, level = 0, className) => {
    let {children, label} = root
    let labelText = label || _.get(children, '[0].condition.attributeName')
    let hasLabel = !!label
    let hasChildren = children.length
    let cls = `d-tree-cell d-tree-lv${level}${className ? ' ' + className : ''}`
    if (label === 'Y') {
      labelText = <span className="color-green">{label}</span>
    } else if (label === 'N') {
      labelText = <span className="color-red">{label}</span>
    }

    return (
      <div className={cls}>
        <div>
          <span className="d-tree-label">
            <span className="d-tree-label-text iblock bold">{labelText}</span>
          </span>
        </div>
        {
          hasChildren ? this.renderCondition(children) : null
        }
        {
          hasChildren ? this.recDicisionTree(children[0].child, level + 1, 'd-tree-child d-tree-cell-0') : null
        }

        {
          hasChildren ? this.recDicisionTree(children[1].child, level + 1, 'd-tree-child d-tree-cell-1') : null
        }
      </div>
    )
  }

  render() {
    const {a, b} = this.props
    return (
      <div>
        {a} + {b} = {a+b}
      </div>
    )
  }
}

module.exports = exports.default = Add