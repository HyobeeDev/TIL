// import logo from './logo.svg';
import './App.css';
import Contents from './components/Contents';
import styled from 'styled-components';



const Wrap = styled.div`
  /* width: 517px; */
  /* height: 1476px; */
  margin: 0 auto;
  padding: 50px 20px;
  background-color: #F0FBF5;
`
const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
`
const SubTitle = styled.p`
  color: #aaa;
  margin: 0;
`
const Title = styled.h1`
  color: #6CA97F;
  font-size: 46px;
  margin: 0;
`
const TextBar = styled.p`
  display: inline-block;
  padding: 5px 15px;
  border-radius: 30px;
  box-sizing: border-box;
  font-size: 13px;
  color: white;
  background-color: #6CA97F;
`
const TextBarSpan = styled.span`
  font-weight: bold;
  color: red;
`

function App() {
  return (
    <>
      <Wrap>
        <TitleContainer>
          <SubTitle>식물의 모든것</SubTitle>
          <Title>All about Plants</Title>
          <TextBar>
            반려식물 입양 계획하시나요? <TextBarSpan>25%~</TextBarSpan>
          </TextBar>
        </TitleContainer>
        <Contents />
      </Wrap>
    </>
  );
}

export default App;
