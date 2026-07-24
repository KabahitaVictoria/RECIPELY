import "./HeroSection.css";
import RecipeCard from "../cards/RecipeCard/RecipeCard";

const HeroSection = () => {
  const recipes = [
     {
      img: "/food-image1.png",
      title: "Fresh Salad",
      time: "15 min",
      color: "#4ECDC4",
    },
    {
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
      title: "Pizza Night",
      time: "45 min",
      color: "#FF6B9D",
    },
  ]

  const stats = [
    { value: "10K+", label: "Recipes Saved" },
    { value: "5K+", label: "Active Users" },
    { value: "4.9★", label: "User Rating" },
  ];

  return (
    <section className="hero">
      <div className="hero-left">
        <p className="badge">
          ✨ Your Recipes in One Place
        </p>

        <h1>
          Your Kitchen's <br />
          Digital <span>Recipe Book</span>
        </h1>

        <p className="subtitle">
          Organize, discover and share your favorite recipes.
        </p>

        <button className="cta">Start Free Today</button>

        <div className="stats">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div class="hero-right">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </section>
  )
}

export default HeroSection;