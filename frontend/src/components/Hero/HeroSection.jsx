import "./HeroSection.css";

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

    </section>
  )
}

export default HeroSection;