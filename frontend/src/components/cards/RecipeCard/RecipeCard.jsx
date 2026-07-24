import './RecipeCard.css';
import {FaHeart, FaStopwatch} from 'react-icons/fa';

const RecipeCard = ({img, title, time, color}) => {
  return (
    <div class="recipe-card">
      <div 
        class="recipe-image"
        style={{ backgroundImage: `url(${img})` }}
      >
        <button class="favourite-btn">
          <FaHeart style={{ color }} />
        </button>
      </div>

      <div class="recipe-content">
        <h3>{title}</h3>

        <div class="recipe-time">
          <FaStopwatch />
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard;