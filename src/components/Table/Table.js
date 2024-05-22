import _ from "lodash";
import React from "react";
import { Table, Popup, Icon } from "semantic-ui-react";

function tableReducer(state, action) {
  switch (action.type) {
    case "CHANGE_SORT":
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction: state.direction === "ascending" ? "descending" : "ascending",
        };
      }
      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: "ascending",
      };
    default:
      throw new Error();
  }
}

function StatewiseTable({ statewiseInfo, selectedStateInfo, handleHover, colorPalette }) {
  const tableData = statewiseInfo
    .filter((d) => {
      if (d.state === "Total" || d.state === "State Unassigned") {
        return null;
      }
      return d;
    })
    .map((d) => {
      return {
        active: parseInt(d.active),
        confirmed: parseInt(d.confirmed),
        deaths: parseInt(d.deaths),
        recovered: parseInt(d.recovered),
        state: d.state,
        statecode: d.statecode,
      };
    });

  const [state, dispatch] = React.useReducer(tableReducer, {
    column: null,
    data: tableData,
    direction: null,
  });
  const { column, data, direction } = state;

  return (
    <>
      <div className="ui red ribbon label">
        Table &nbsp;&nbsp;
        <Popup
          content={
            <>
              <b>Hover/Click</b> a state to interact with charts.
              <br /> <b>Sort</b> by clicking on Table Heading.
            </>
          }
          on={["hover", "click"]}
          popper={{
            id: "table-popper-container",
            style: { zIndex: 2000 },
          }}
          trigger={<Icon name="info circle" />}
          hideOnScroll
        />
      </div>

      <div className="ui top right attached label">
        Last Updated: <div className="detail">{selectedStateInfo.lastupdatedtime}</div>
      </div>

      <div className="ui horizontal divider">{selectedStateInfo.state}</div>

      <div style={{ overflow: "auto", height: "700px", margin: "10px 0px" }}>
        <Table
          sortable
          celled
          selectable
          fixed
          singleLine
          unstackable
          compact
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === "state" ? direction : null}
                onClick={() => dispatch({ type: "CHANGE_SORT", column: "state" })}
              >
                State/UT
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "confirmed" ? direction : null}
                onClick={() =>
                  dispatch({
                    type: "CHANGE_SORT",
                    column: "confirmed",
                  })
                }
                style={{
                  backgroundColor: colorPalette.confirmed.shadeLight,
                }}
              >
                Confirmed
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "active" ? direction : null}
                onClick={() => dispatch({ type: "CHANGE_SORT", column: "active" })}
                style={{
                  backgroundColor: colorPalette.active.shadeLight,
                }}
              >
                Active
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "recovered" ? direction : null}
                onClick={() =>
                  dispatch({
                    type: "CHANGE_SORT",
                    column: "recovered",
                  })
                }
                style={{
                  backgroundColor: colorPalette.recovered.shadeLight,
                }}
              >
                Recovered
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "deaths" ? direction : null}
                onClick={() => dispatch({ type: "CHANGE_SORT", column: "deaths" })}
                style={{
                  backgroundColor: colorPalette.deaths.shadeLight,
                }}
              >
                Deaths
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row
              key={"total"}
              disabled
            >
              <Table.Cell>{statewiseInfo[0].state}</Table.Cell>
              <Table.Cell>{statewiseInfo[0].confirmed}</Table.Cell>
              <Table.Cell>{statewiseInfo[0].active}</Table.Cell>
              <Table.Cell>{statewiseInfo[0].recovered}</Table.Cell>
              <Table.Cell>{statewiseInfo[0].deaths}</Table.Cell>
            </Table.Row>
            {data.map(({ state, statecode, active, confirmed, recovered, deaths }) => {
              return (
                <Table.Row
                  key={statecode}
                  onMouseOver={() => handleHover(statecode)}
                  onMouseOut={() => handleHover("TT")}
                >
                  <Table.Cell>{state}</Table.Cell>
                  <Table.Cell
                    style={{
                      backgroundColor: colorPalette.confirmed.shadeLight,
                    }}
                  >
                    {confirmed}
                  </Table.Cell>
                  <Table.Cell
                    style={{
                      backgroundColor: colorPalette.active.shadeLight,
                    }}
                  >
                    {active}
                  </Table.Cell>
                  <Table.Cell
                    style={{
                      backgroundColor: colorPalette.recovered.shadeLight,
                    }}
                  >
                    {recovered}
                  </Table.Cell>
                  <Table.Cell
                    style={{
                      backgroundColor: colorPalette.deaths.shadeLight,
                    }}
                  >
                    {deaths}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default StatewiseTable;
