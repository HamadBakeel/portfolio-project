import {React, useState} from 'react'
import styled from '@emotion/styled'
import {motion, useAnimationControls} from 'framer-motion'
import Dots from '../components/Dots';

const HomeSectionContainer = styled.div`
  position: relative;
  padding: 7rem 5rem;
  height: 100vh;
  .colored{
    color: #05fdd8;
  }
  span{
    display: inline-block;
  }
  &:before {
    content: '<body>';
    font-family: 'La Belle Aurore',cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;
    margin-top: -5rem;
    left: 1.5rem;
  }

  h1:before {
    content: '<h1>';
    font-family: 'La Belle Aurore',cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;
    margin-top: -1rem;
    left: -1.5rem;
  }

  h1:after {
    content: '</h1>';
    font-family: 'La Belle Aurore',cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;
    margin-top: 6.8rem;
    margin-left: 1rem;
  }

  p.text-gray{
    font-size: 1.6rem;
    letter-spacing: 4px;
    margin-top: 3rem;
    display: block;
    color: #8d8d8d;
    position: relative;
    width: fit-content;
  }
  p.text-gray:before {
    content: '<p>';
    font-family: 'La Belle Aurore',cursive;
    color: #515152;
    font-size: 26px;
    position: absolute;
    margin-top: -1.5rem;
    left: -2rem;
}
  p.text-gray:after {
    content: '</p>';
    font-family: 'La Belle Aurore',cursive;
    color: #515152;
    font-size: 26px;
    position: absolute;
    left: -2rem;
    bottom: -2rem;
  }

`
function HomeSection() {
  function stringToSpanArray(inputString) {
    const resultArray = [];
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] !== ' ') {
        if (inputString[i] === '-') {
          resultArray.push(<br key={i} />);
        } else {
          resultArray.push(<TextSpan key={i} text={inputString[i]}/>);
        }
      }else{
        resultArray.push("\u00a0");
      }
    }
    return resultArray;
  }
  const spanArray = stringToSpanArray("Hi,-I'm Hamad -Web Developer");
  return (
    <HomeSectionContainer >
      <Dots></Dots>
      <h1>
        {spanArray}
      </h1>
      <p className="text-gray">Front End Developer</p>
    </HomeSectionContainer>
  )
}

export default HomeSection

function TextSpan({text}) {
  const controls = useAnimationControls()
  const [isPlaying, setIsPlaying] = useState(false)
  const rubberBand = ()=> {
    controls.start({
      transform: [
        "scale(1, 1)",
        "scale(1.4, .55)",
        "scale(.75, 1.25)",
        "scale(1.25, .85)",
        "scale(.9, 1.05)",
        "scale(1, 1)",
      ], 
      transition: {
        times: [0, .4, .6, .7, .8, .9]
      }
    })
    setIsPlaying(true)
  }
  return (
    <motion.span 
      animate={controls}
      onMouseOver={()=>{
        if(!isPlaying)rubberBand()
      }}
      onAnimationComplete={()=> setIsPlaying(false)}
      className={`${isPlaying ? "colored" : ""}`}
    >{text}</motion.span>
  )
}

