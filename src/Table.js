import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
          <tr>
            <th>Task</th>
            <th>Quantity</th>
          </tr>
        </thead>
    )
}

const TableBody = props => {
  const rows = props.itemData.items.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.item}</td>
        <td>{row.quantity}</td>
        <td>
          <button onClick={() => props.removeItem(index)}>Delete</button>
        </td>
      </tr>
    )
  });

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { itemData, removeItem } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody  itemData={itemData} removeItem={removeItem}/>
      </table>
    )
  }
}

export default Table;
