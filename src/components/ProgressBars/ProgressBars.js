import React from "react";
import { Progress } from "semantic-ui-react";
import { numbersToPercentage } from "./../../utils/util";
import styled from "styled-components";

const StyledProgressBar = styled(Progress)`
  & > .bar {
    background-color: ${(props) => props.$color || "grey"} !important;
  }
`;

function ProgressBars({ selectedStateInfo, colorPalette }) {
  const percentArr = numbersToPercentage([
    selectedStateInfo.confirmed,
    selectedStateInfo.active,
    selectedStateInfo.recovered,
    selectedStateInfo.deaths,
  ]);
  return (
    <React.Fragment>
      <span className="ui red ribbon label">Progress Bars</span>
      <div className="ui top right attached label">
        Last Updated: <div className="detail">{selectedStateInfo.lastupdatedtime}</div>
      </div>

      <div className="ui horizontal divider">{selectedStateInfo.state}</div>

      <StyledProgressBar
        percent={percentArr[0]}
        active
        progress
        $color={colorPalette.confirmed.color}
      >
        Confirmed
      </StyledProgressBar>
      <StyledProgressBar
        percent={percentArr[1]}
        active
        progress
        $color={colorPalette.active.color}
      >
        Active
      </StyledProgressBar>
      <StyledProgressBar
        percent={percentArr[2]}
        active
        progress
        $color={colorPalette.recovered.color}
      >
        Recovered
      </StyledProgressBar>
      <StyledProgressBar
        percent={percentArr[3]}
        active
        progress
        $color={colorPalette.deaths.color}
      >
        Deaths
      </StyledProgressBar>
    </React.Fragment>
  );
}

export default ProgressBars;
