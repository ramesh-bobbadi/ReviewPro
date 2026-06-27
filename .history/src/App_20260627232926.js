import './App.css';
import { useState } from 'react';
import StarRating from './components/star_rating/index';

const reviewCards = [
  {
    id: 1,
    title: 'Sunset Escape',
    description: 'Soft light, calm colors, and a clean composition.',
    image: '/rating.webp',
  },
  {
    id: 2,
    title: 'Bold Contrast',
    description: 'A stronger visual style for users who prefer vivid imagery.',
    image: '/rating2.png',
  },
  {
    id: 3,
    title: 'Classic Focus',
    description: 'Simple, clear framing that keeps attention on the subject.',
    image: '/star_rating_img.webp',
  },
];

function App() {
  const [activeCardId, setActiveCardId] = useState(reviewCards[0].id);

  const activeCard = reviewCards.find((card) => card.id === activeCardId) || reviewCards[0];

  return (
    <div className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">Image-first review prompt</p>
        <h1>Show the image first, then reveal the rating when the user feels engaged.</h1>
        <p className="hero-copy">
          The card below lets visitors browse images, hover a card to see the rating, and rate the one
          they like based on the experience.
        </p>
      </section>

      <section className="review-layout">
        <div className="review-gallery" aria-label="Review images">
          {reviewCards.map((card) => (
            <button
              key={card.id}
              type="button"
              className={`gallery-card ${activeCardId === card.id ? 'is-selected' : ''}`}
              onMouseEnter={() => setActiveCardId(card.id)}
              onFocus={() => setActiveCardId(card.id)}
              onClick={() => setActiveCardId(card.id)}
            >
              <img src={card.image} alt={card.title} className="gallery-image" />
              <span className="gallery-label">{card.title}</span>
            </button>
          ))}
        </div>

        <article className="review-card">
          <div className="review-image-wrap">
            <img src={activeCard.image} alt={activeCard.title} className="review-image" />
            <div className="review-overlay">
              <p className="overlay-copy">Hover to rate</p>
              <StarRating noOfStars={5} name={activeCard.title} />
            </div>
          </div>

          <div className="review-content">
            <div>
              <p className="review-kicker">Current selection</p>
              <h2>{activeCard.title}</h2>
              <p className="review-description">{activeCard.description}</p>
            </div>

            <p className="review-note">
              The rating becomes visible on hover, while the image stays front and center so the user can
              react to the visual experience first.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
