import React from 'react'
import styled from '@emotion/styled'

const StyledLoader = styled.div`
@import "lesshat";

/* INSPIRATION: http://drbl.in/1945392 */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300);

// LOADING
// ---------
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -35px 0 0 -56px;
  .size(112px, 70px);
  .c;

  .finger {
    float: left;
    margin: 0 2px 0 0;
    .size(20px, 100%);
  }
  .finger-1 {
    .animation(finger-1-animation, 2s, infinite, ease-out);

    span {
      .animation(finger-1-animation-span, 2s, infinite, ease-out);
    }
    i {
      .animation(finger-1-animation-i, 2s, infinite, ease-out);
    }
  }
  .finger-2 {
    .animation(finger-2-animation, 2s, infinite, ease-out);

    span {
      .animation(finger-2-animation-span, 2s, infinite, ease-out);
    }
    i {
      .animation(finger-2-animation-i, 2s, infinite, ease-out);
    }
  }
  .finger-3 {
    .animation(finger-3-animation, 2s, infinite, ease-out);

    span {
      .animation(finger-3-animation-span, 2s, infinite, ease-out);
    }
    i {
      .animation(finger-3-animation-i, 2s, infinite, ease-out);
    }
  }
  .finger-4 {
    .animation(finger-4-animation, 2s, infinite, ease-out);

    span {
      .animation(finger-4-animation-span, 2s, infinite, ease-out);
    }
    i {
      .animation(finger-4-animation-i, 2s, infinite, ease-out);
    }
  }
  .finger-item {
    position: relative;
    .square(100%);
    .border-radius(6px 6px 8px 8px);
    background: #fff;

    span {
      position: absolute;
      left: 0;
      top: 0;
      .size(100%, auto);
      padding: 5px 5px 0 5px;

      &:before,
      &:after {
        content: "";
        position: relative;
        display: block;
        margin: 0 0 2px 0;
        .size(100%, 2px);
        background: #4492f4;
      }
    }
    i {
      position: absolute;
      left: 3px;
      bottom: 3px;
      .size(14px, 14px);
      .border-radius(10px 10px 7px 7px);
      background: #4492f4;
    }
  }
  .last-finger {
    position: relative;
    float: left;
    .size(24px, 100%);
    overflow: hidden;
  }
  .last-finger-item {
    position: absolute;
    right: 0;
    top: 32px;
    .size(110%, 20px);
    .border-radius(0 5px 14px 0);
    background: #fff;
    .animation(finger-5-animation, 2s, infinite, linear);

    i {
      position: absolute;
      left: 0;
      top: -8px;
      .size(22px, 8px);
      background: #fff;
      overflow: hidden;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        .size(34px, 20px);
        .border-radius(0 0 15px 15px);
        background: #4492f4;
      }
    }
  }
}

// ANIMATION
// ---------
@keyframes finger-1-animation {
  0% {
    padding: 12px 0 5px 0;
  }
  20% {
    padding: 12px 0 5px 0;
  }
  29% {
    padding: 4px 0 24px 0;
  }
  35% {
    padding: 4px 0 24px 0;
  }
  41% {
    padding: 12px 0 5px 0;
  }
  100% {
    padding: 12px 0 5px 0;
  }
}
@keyframes finger-1-animation-span {
  0% {
    top: 0;
  }
  20% {
    top: 0;
  }
  29% {
    top: -7px;
  }
  35% {
    top: -7px;
  }
  41% {
    top: 0;
  }
  100% {
    top: 0;
  }
}
@keyframes finger-1-animation-i {
  0% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
  20% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
  29% {
    bottom: 8px;
    height: 12px;
    .border-radius(7px 7px 4px 4px);
  }
  35% {
    bottom: 8px;
    height: 12px;
    .border-radius(7px 7px 4px 4px);
  }
  41% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
  100% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
}

@keyframes finger-2-animation {
  0% {
    padding: 6px 0 2px 0;
  }
  24% {
    padding: 6px 0 2px 0;
  }
  33% {
    padding: 2px 0 16px 0;
  }
  39% {
    padding: 2px 0 16px 0;
  }
  45% {
    padding: 6px 0 2px 0;
  }
  100% {
    padding: 6px 0 2px 0;
  }
}
@keyframes finger-2-animation-span {
  0% {
    top: 0;
  }
  24% {
    top: 0;
  }
  33% {
    top: -7px;
  }
  39% {
    top: -7px;
  }
  45% {
    top: 0;
  }
  100% {
    top: 0;
  }
}
@keyframes finger-2-animation-i {
  0% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
  24% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
  33% {
    bottom: 8px;
    height: 12px;
    .border-radius(7px 7px 4px 4px);
  }
  39% {
    bottom: 8px;
    height: 12px;
    .border-radius(7px 7px 4px 4px);
  }
  45% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
  100% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
}

@keyframes finger-3-animation {
  0% {
    padding: 0 0 0 0;
  }
  28% {
    padding: 0 0 0 0;
  }
  37% {
    padding: 0 0 12px 0;
  }
  43% {
    padding: 0 0 12px 0;
  }
  49% {
    padding: 0 0 0 0;
  }
  100% {
    padding: 0 0 0 0;
  }
}
@keyframes finger-3-animation-span {
  0% {
    top: 0;
  }
  28% {
    top: 0;
  }
  37% {
    top: -7px;
  }
  43% {
    top: -7px;
  }
  49% {
    top: 0;
  }
  100% {
    top: 0;
  }
}
@keyframes finger-3-animation-i {
  0% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
  28% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
  37% {
    bottom: 8px;
    height: 12px;
    .border-radius(7px 7px 4px 4px);
  }
  43% {
    bottom: 8px;
    height: 12px;
    .border-radius(7px 7px 4px 4px);
  }
  49% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
  100% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
}

@keyframes finger-4-animation {
  0% {
    padding: 8px 0 3px 0;
  }
  32% {
    padding: 8px 0 3px 0;
  }
  41% {
    padding: 4px 0 20px 0;
  }
  47% {
    padding: 4px 0 20px 0;
  }
  53% {
    padding: 8px 0 3px 0;
  }
  100% {
    padding: 8px 0 3px 0;
  }
}
@keyframes finger-4-animation-span {
  0% {
    top: 0;
  }
  32% {
    top: 0;
  }
  41% {
    top: -7px;
  }
  47% {
    top: -7px;
  }
  53% {
    top: 0;
  }
  100% {
    top: 0;
  }
}
@keyframes finger-4-animation-i {
  0% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
  32% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
  41% {
    bottom: 8px;
    height: 12px;
    .border-radius(7px 7px 4px 4px);
  }
  47% {
    bottom: 8px;
    height: 12px;
    .border-radius(7px 7px 4px 4px);
  }
  53% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
  100% {
    bottom: 3px;
    height: 14px;
    .border-radius(10px 10px 7px 7px);
  }
}

@keyframes finger-5-animation {
  0% {
    top: 32px;
    right: 0;
    .border-radius(0 5px 14px 0);
    .rotate(0deg);
  }
  34% {
    top: 32px;
    right: 0;
    .border-radius(0 5px 14px 0);
    .rotate(0deg);
  }
  43% {
    top: 20px;
    right: 2px;
    .border-radius(0 8px 20px 0);
    .rotate(-12deg);
  }
  50% {
    top: 20px;
    right: 2px;
    .border-radius(0 8px 20px 0);
    .rotate(-12deg);
  }
  60% {
    top: 32px;
    right: 0;
    .border-radius(0 5px 14px 0);
    .rotate(0deg);
  }
  100% {
    top: 32px;
    right: 0;
    .border-radius(0 5px 14px 0);
    .rotate(0deg);
  }
}
  `
function Loader() {
    return (
        <StyledLoader>
            <div class="loading">
                <div class="finger finger-1">
                    <div class="finger-item">
                        <span></span><i></i>
                    </div>
                </div>
                <div class="finger finger-2">
                    <div class="finger-item">
                        <span></span><i></i>
                    </div>
                </div>
                <div class="finger finger-3">
                    <div class="finger-item">
                        <span></span><i></i>
                    </div>
                </div>
                <div class="finger finger-4">
                    <div class="finger-item">
                        <span></span><i></i>
                    </div>
                </div>
                <div class="last-finger">
                    <div class="last-finger-item"><i></i></div>
                </div>
            </div>
        </StyledLoader>
    )
}

export default Loader