import React from "react";
import CountUp from "react-countup";
import { Card } from "semantic-ui-react";

import styled from "styled-components";

const StyledCard = styled(Card)`
  border-bottom: 3px solid ${({ $color }) => $color.shadeDark || "grey"} !important;

  & > .content {
    background-color: ${({ $color }) => $color.shadeLight || "#000"} !important;
  }
  & > .value {
    color: ${({ $color }) => $color.shadeDark || "#000"} !important;
  }
`;

export default function InfoBox({ title, total, color }) {
  return (
    <StyledCard
      $color={color}
      fluid
    >
      <div className="content">
        <div
          className="ui mini statistic"
          style={{ width: "100%" }}
        >
          <div className="label">{title}</div>
          <div className="value">
            {isFinite(total) ? (
              <CountUp
                end={Number(total)}
                duration={1}
                separator={","}
              ></CountUp>
            ) : (
              0
            )}
          </div>
        </div>
      </div>
    </StyledCard>
  );
}
