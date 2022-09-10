import React from "react"

import styled from 'styled-components'

const Page = ({ children }) => {
  const StyledDiv = styled.div`
    height: calc(100vh - 4rem);
  `;

  return (
    <StyledDiv className="overflow-auto">
      {children}
    </StyledDiv>
  )
}

export default Page;
