import React from "react";
import styled from 'styled-components';



const Container = styled.div`
  width: 1100px;
  height: 1000px;
  margin: 0 auto;
  padding: 50px 0;
  background-color: white;
`
const Items = styled.div`
  
`
const Item = styled.div`

  &:nth-child(even) {
    /* display: flex;
    order: 1; */
    background-color: red;
}
  
`
const ItemBg = styled.div`
  display: flex;
`
const ItemBgName = styled.div`
  flex: 1;
`
const ItemBgNum = styled.span`
  flex: 1;
`
const ItemInfo = styled.div`
  display: flex;
`
const ItemInfoImgs = styled.div`
  flex: 1;
`
const ItemInfoImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`
const ItemInfoTxts = styled.span`
  flex: 1;
`
const ItemInfoTitle = styled.p`
  
`
const TitleNormal = styled.span`
  
`
const TitleBold = styled.span`
  
`
const ItemInfoDescUl = styled.ul`
  
`
const ItemInfoDescLi = styled.li`
  
`
const MoreBtn = styled.button`
  
`

export default function Contents () {

  const plants = [
    {
      id: 'plant_01',
      num: '01',
      bgTxt: 'CACTUS',
      img: '/images/img_01.jpg',
      titleNormal: '대세는',
      titleBold: '선인장!',
      desc1: '요즘 가장 핫한 인테리어 소품으로 사랑을 받고 있는 선인장!',
      desc2: '이런 선인장에도 정말 다양한 종류가 있답니다.',
      desc3: '선인장으로 홈 스타일링을 할 땐 하나의 선인장보단',
      desc4: '두 세 개의 선인장을 함께 두는 것이 인테리어 효과에 더 좋습니다.'
    },
    {
      id: 'plant_02',
      num: '02',
      BgTxt: 'test 02',
      img: '/images/img_02.jpg',
      titleNormal: '시들지 않는 매력의',
      titleBold: '드라이플라워',
      desc1: '꽃을 좋아하지만 금방 시들어버리기에',
      desc2: '선뜻 구매를 하지 못하신다면 드라이플라워나',
      desc3: '프레져브드플라워를 추천드려요.',
      desc4: '꽃의 아름다움과 오랫동안 함께하실 수 있을 거예요'
    },
    {
      id: 'plant_03',
      num: '03',
      bgTxt: 'test 03',
      img: '/images/img_03.jpg',
      titleNormal: '또 하나의 작은 세상',
      titleBold: '테라리움',
      desc1: '재미있는 식물 기르기를 원하신다면 테라리움을 꾸며보세요',
      desc2: '다양한 식물과 다양한 소품으로 스타일링하여',
      desc3: '세상에서 단 하나뿐인 나만의 정원을 가질 수 있어요'
    },
    {
      id: 'plant_04',
      num: 'test 04',
      bgTxt: 'test_04',
      img: '/images/img_04.jpg',
      titleNormal: '진짜 나무 같은',
      titleBold: '조화 나무',
      desc1: '식물 관리가 어려우시다면 조화 나무를 입양하세요',
      desc2: '요즘은 정말 높은 퀄리티로 제작되어',
      desc3: '가까이서 보지 않으면 진짜 나무와 구분하기 힘들어요'
    },
    {
      id: 'plant_05',
      num: '05',
      bgTxt: 'test 05',
      img: '/images/img_05.jpg',
      titleNormal: '화분 스탠드',
      titleBold: '화분 스탠드 & 화분 테이블',
      desc1: '조금 더 색다른 연출을 원하신다면',
      desc2: '선뜻 구매를 하지 못하신다면 드라이플라워나',
      desc3: '프레져브드플라워를 추천드려요.',
      desc4: '꽃의 아름다움과 오랫동안 함께하실 수 있을 거예요'
    }
  ]

  return (
    <>
      <Container>
        <Items>
          {
            plants.map( (plant) => {
              return (
                <Item key={plant.id}>
                  <ItemBg>
                    <ItemBgName>{plant.bgTxt}</ItemBgName>
                    <ItemBgNum>{plant.num}</ItemBgNum>
                  </ItemBg>
                  <ItemInfo>
                    <ItemInfoImgs>
                      <ItemInfoImg src={plant.img}></ItemInfoImg>
                    </ItemInfoImgs>
                    <ItemInfoTxts>
                      <ItemInfoTitle>
                        <TitleNormal>{plant.titleNormal}</TitleNormal>
                        <TitleBold>{plant.titleBold}</TitleBold>
                      </ItemInfoTitle>
                      <ItemInfoDescUl>
                        <ItemInfoDescLi>{plant.desc1}</ItemInfoDescLi>
                        <ItemInfoDescLi>{plant.desc2}</ItemInfoDescLi>
                        <ItemInfoDescLi>{plant.desc3}</ItemInfoDescLi>
                        <ItemInfoDescLi>{plant.desc4}</ItemInfoDescLi>
                      </ItemInfoDescUl>
                      <MoreBtn>MORE ITEM &gt;</MoreBtn>
                    </ItemInfoTxts>
                  </ItemInfo>
                </Item>
              )
            })
          }
        </Items>
      </Container>
    </>
  )
}