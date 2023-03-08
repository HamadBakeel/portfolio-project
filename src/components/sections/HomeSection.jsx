import React from 'react'
import styled from '@emotion/styled'

const HomeSectionContainer = styled.div`
  width: 100%;
  img{
    width: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  }

`
function HomeSection() {
  return (
    <HomeSectionContainer >
        <img src="/assets/images/pg1_left_light.svg" alt="" />
    </HomeSectionContainer>
  )
}

export default HomeSection