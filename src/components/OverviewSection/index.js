import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
   OverviewContainer,
   OverviewWrapper,
   OverviewTitle,
   OverviewContent,
   OverviewCardContainer,
   StyledOverviewCard,
} from './OverviewElements';
import data from './OverviewData';
import LazyLoad from './../../hooks/LazyLoad';

const updateGridOrder = (prevGridOrder, selectedCardOrder) => {
   let newGridOrder = {};
   for (let key in prevGridOrder) {
      if (prevGridOrder[key]['order'] === selectedCardOrder) {
         newGridOrder[key] = {
            ...prevGridOrder[key],
            order: 3,
         };
         continue;
      }
      if (prevGridOrder[key]['order'] === 3) {
         newGridOrder[key] = {
            ...prevGridOrder[key],
            order: selectedCardOrder,
         };
         continue;
      }
      newGridOrder[key] = {
         ...prevGridOrder[key],
      };
   }
   return newGridOrder;
};

const OverviewSection = () => {
   const [gridOrder, setGridOrder] = useState({
      firstCard: {
         id: uuidv4(),
         order: 1,
      },
      secondCard: {
         id: uuidv4(),
         order: 2,
      },
      thirdCard: {
         id: uuidv4(),
         order: 3,
      },
      fourthCard: {
         id: uuidv4(),
         order: 4,
      },
      fifthCard: {
         id: uuidv4(),
         order: 5,
      },
   });
   const [selectedCardNum, setSelectedCardNum] = useState('initial');

   function handleCardClick(selectedCardOrder) {
      console.log('awd', selectedCardOrder);
      if (selectedCardOrder === 3) return;

      setGridOrder(updateGridOrder(gridOrder, selectedCardOrder));
      setSelectedCardNum(selectedCardOrder);
   }

   return (
      <LazyLoad delay={250} id="overview">
         <OverviewContainer>
            <OverviewWrapper>
               <OverviewTitle>
                  <h1>Covid </h1>
                  <p>Advice for the public: Coronavirus disease (COVID-19)</p>
               </OverviewTitle>
               <OverviewContent>
                  {Object.entries(gridOrder).map((order) => {
                     return (
                        <OverviewCardContainer
                           $order={order[1].order}
                           key={order[1].id}
                           onClick={() => {
                              handleCardClick(order[1].order);
                           }}
                           $animationTime={0.7}
                           $selectedCardNum={selectedCardNum}
                        >
                           <StyledOverviewCard
                              $order={order[1].order}
                              data={{ ...data[order[0]] }}
                           />
                        </OverviewCardContainer>
                     );
                  })}
               </OverviewContent>
            </OverviewWrapper>
         </OverviewContainer>
      </LazyLoad>
   );
};

export default OverviewSection;
