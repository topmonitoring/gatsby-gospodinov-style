import React from 'react'
import FaqItem from '../FAQ-section/faq-Item.component'
import styled from 'styled-components';

export const StyledSection=styled.div`
width: 60%;
margin: auto;
@media screen and (max-width: 1000px) {
    width: 80%;
    margin: 0px;
  }
`

export const FAQSection = () => {
    const FAQS = [
        {
          title: 'Как да запазя час?',
          content:'Може да запазите час тук-на нашия сайт, или се обадете на телефон ☎️+359 883353591'
        },
        {
          title: 'Мога ли да се откажа от час?',
          content:'Разбира се,просто се обадете на телефон ☎️+359 883353591'
        },
        {
          title: 'Колко струва?',
          content:'Актуална ценова листа може да видите като натиснете бутона "запази час"'
        },
        {
          title: 'Как мога да платя?',
          content:'Към момента се заплаща само в брой'
        },     
        {
            title: 'Какви продукти използвате?',
            content:'Използваме само висококачествени продукти,като при посещение ще получите информация кой продукт ще е най-подходящ за вас.'
          },
          {
            title: 'Мога ли да дойда и разгледам преди да запазя час?',
            content:'Разбира се, заповядайте в град Пловдив на ул.Златю Бояджиев №3 да се запознаем и да разгледате. Ще отговорим на всички ваши въпроси.'
          },
                  
      ];

    return(
       <StyledSection>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content}
          </FaqItem>
        ))}
      </StyledSection>
    )
};

