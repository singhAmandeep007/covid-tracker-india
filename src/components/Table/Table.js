import _ from 'lodash'
import React from 'react';
import { Table } from 'semantic-ui-react';
import './Table';

function tableReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }
      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}

function StatewiseTable({ statewiseInfo, handleHover }) {

  const tableData = statewiseInfo.filter((d)=>{
    if(d.state === 'Total' || d.state === 'State Unassigned'){
      return null;
    }
    return d;
  }).map(d=>{
    return{
      active:parseInt(d.active),
      confirmed:parseInt(d.confirmed),
      deaths:parseInt(d.deaths),
      recovered:parseInt(d.recovered),
      state:d.state,
      statecode:d.statecode
    }
  })
  
  const [state, dispatch] = React.useReducer(tableReducer, {
    column: null,
    data: tableData,
    direction: null,
  })
  const { column, data, direction } = state;
  
  return (

    <Table sortable celled selectable fixed singleLine unstackable compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'state' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'state' })}
          >
            State/UT
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'confirmed' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'confirmed' })}
          >
            Confirmed
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'active' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'active' })}
          >
            Active
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'recovered' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'recovered' })}
          >
            Recovered
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'deaths' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'deaths' })}
          >
            Deaths
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row key={"total"} disabled>
          <Table.Cell>
            {statewiseInfo[0].state}
          </Table.Cell>
          <Table.Cell>{statewiseInfo[0].confirmed}</Table.Cell>
          <Table.Cell>{statewiseInfo[0].active}</Table.Cell>
          <Table.Cell>{statewiseInfo[0].recovered}</Table.Cell>
          <Table.Cell>{statewiseInfo[0].deaths}</Table.Cell>
        </Table.Row>
        {data.map(({state,statecode,active,confirmed,recovered,deaths}) => {
            return (<Table.Row 
              key={statecode} 
              onMouseOver={() => handleHover(statecode)}
              onMouseOut={() => handleHover('TT')}
            >
              <Table.Cell>{state}</Table.Cell>
              <Table.Cell>{confirmed}</Table.Cell>
              <Table.Cell>{active}</Table.Cell>
              <Table.Cell>{recovered}</Table.Cell>
              <Table.Cell>{deaths}</Table.Cell>
            </Table.Row>)
          }
        )}
      </Table.Body>
    </Table>
  )
}

export default StatewiseTable;

