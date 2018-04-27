import React, { Component } from 'react';

class ToolbarComponent extends Component {
  render() {
    const { messages, toggleSelectAll, markReadStatus } = this.props;

    let unreadCount = 0;
    const selectedCount = messages.filter(message => message.selected).length;
    let selectAllClass;

    switch (selectedCount) {
      case 0:
        selectAllClass = 'fa-square-o';
        break;
      case messages.length:
        selectAllClass = 'fa-check-square-o';
        break;
      default:
        selectAllClass = 'fa-minus-square-o';
    }

    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{unreadCount}</span>
            unread messages
          </p>

          <button className="btn btn-default" onClick={toggleSelectAll}>
            <i className={`fa ${selectAllClass}`} />
          </button>

          <button
            className="btn btn-default"
            onClick={() => markReadStatus(true)}
            disabled={selectedCount === 0}>
            Mark As Read
          </button>

          <button
            className="btn btn-default"
            onClick={() => markReadStatus(false)}
            disabled={selectedCount === 0}>
            Mark As Unread
          </button>

          <select className="form-control label-select" disabled="disabled">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" disabled="disabled">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" disabled="disabled">
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </div>
    );
  }
}

export default ToolbarComponent;
