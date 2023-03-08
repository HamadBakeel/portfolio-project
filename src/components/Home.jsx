import '../App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import HomeSection from './sections/homeSection';
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
function Home({currentSection, setCurrentSection}) {

  return (
    <ReactFullpage
      //fullpage options
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000} /* Options here */
      afterLoad={(origin, destination, direction) => {
        setCurrentSection(destination.index);
      }}
      render={({ state, fullpageApi }) => {
        const handleKeyDown = (event) => {
          if (fullpageApi && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
            const destinationIndex = event.key === 'ArrowDown' ? currentSection + 1 : currentSection - 1;
            fullpageApi.moveTo(destinationIndex + 1);
          }
        };

        if (fullpageApi) {
          window.addEventListener('keydown', handleKeyDown);
        }

        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <HomeSection/>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
            <div className="section">
              <p>Section 3</p>
            </div>
            <div className="section">
              <p>Section 4</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default Home;
