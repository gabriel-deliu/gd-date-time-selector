import React from 'react'
import PropTypes from 'prop-types'
import DateTimeSelector from './DateTimeSelector'

export default class DateTimeRangeSelector extends React.Component {

  state = {
    from: {mo: null, text: ''},
    to: {mo: null, text: ''}
  }

  static propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func,
    from: PropTypes.string,
    to: PropTypes.string
  }

  static defaultProps = {
    children: [],
    onChange: null,
    from: '',
    to: ''
  }

  componentDidMount () {
    this.setState({
      from: { mo: null, text: this.props.from },
      to: { mo: null, text: this.props.to }
    })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      from: { mo: null, text: nextProps.from },
      to: { mo: null, text: nextProps.to }
    })
  }

  handleFromDateSelected = (selected) => {
    this.setState({ from: selected },
      () => {
        if (this.props.onChange) {
          this.props.onChange({from: this.state.from, to: this.state.to})
        }
      })
  }

  handleToDateSelected = (selected) => {
    this.setState({ to: selected },
      () => {
        if (this.props.onChange) {
          this.props.onChange({from: this.state.from, to: this.state.to})
        }
      })
  }

  render () {
    const {from, to} = this.state

    return (
      <div className='container'>
        <div className='form-group'>
          <DateTimeSelector
            value={from ? from.text : ''}
            placeholder='From...'
            onValidDateEntered={this.handleFromDateSelected} />
        </div>
        <div className='form-group'>
          <DateTimeSelector
            value={to ? to.text : ''}
            placeholder='To...'
            onValidDateEntered={this.handleToDateSelected} />
        </div>
        {this.props.children}
      </div>
    )
  }
}
