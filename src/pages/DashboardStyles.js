import styled from "styled-components"

export const OverviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
  grid-auto-rows: 94px;
  grid-gap: 24px;
  margin-bottom: 24px;
`

export const OverviewCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #d3d3;
`

export const CardContainer = styled.div`
  column-count: 1;
  column-gap: 20px;
  // margin: 20px;

  @media (min-width: 768px) {
    column-count: 2;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  margin-bottom: 20px;
  -webkit-column-break-inside: avoid;
  padding: 24px;
  box-sizing: border-box;

  &:first-child {
    height: 485px;
  }

  &:nth-child(2) {
    height: 200px;
  }

  &:nth-child(3) {
    height: 265px;
  }
`
