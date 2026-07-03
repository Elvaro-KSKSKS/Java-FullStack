import Card from '../Card'
import { homeCards, profileCards } from '../../data/cards'

import { Section, List } from './styles'

type Props = {
  profileList?: boolean
}

const CardsList = ({ profileList }: Props) => (
  <Section>
    <div className="container">
      <List profileList={profileList}>
        {profileList
          ? profileCards.map((card) => (
              <Card
                profileCard
                key={card.id}
                cardImg={card.cardImg}
                title={card.title}
                description={card.description}
              />
            ))
          : homeCards.map((card) => (
              <Card
                key={card.id}
                cardImg={card.cardImg}
                tags={card.tags}
                title={card.title}
                rating={card.rating}
                description={card.description}
              />
            ))}
      </List>
    </div>
  </Section>
)

export default CardsList
