import styles from "./Home.module.scss";

const categoriesList = [
  {
    img: "images/laptop.jpg",
    name: "Computers & Laptop",
    quantity: 0,
    borderRight: true,
  },
  {
    img: "images/camera.jpg",
    name: "Cameras & Video",
    quantity: 0,
    borderRight: true,
  },
  {
    img: "images/tv.jpg",
    name: "Smart Television",
    quantity: 0,
    borderRight: true,
  },
  {
    img: "images/watch.jpg",
    name: "Smartwatches",
    quantity: 0,
    borderRight: true,
  },
  { img: "images/music-gaming.png", name: "Music & Gaming", quantity: 0 },
  {
    img: "images/mobile.jpg",
    name: "Mobile & Tablets",
    quantity: 0,
    borderRight: true,
  },
  {
    img: "images/acc.jpg",
    name: "Accessories",
    quantity: 0,
    borderRight: true,
  },
  {
    img: "images/speaker.jpg",
    name: "Portable Speakers",
    quantity: 0,
    borderRight: true,
  },
  {
    img: "images/homeapp.jpg",
    name: "Home Appliances",
    quantity: 0,
    borderRight: true,
  },
  { img: "images/headphone.jpg", name: "Headphones", quantity: 0 },
];

function Categories() {
  return (
    <>
      {categoriesList.map((category) => (
        <div
          className={`${styles.category} ${
            category.borderRight && styles["border-right"]
          } d-flex align-items-center py-3`}
        >
          <div className="flex-grow-1 px-2">
            <h6>{category.name}</h6>
            <p>{category.quantity} Items</p>
          </div>
          <img src={category.img} alt={category.name} />
        </div>
      ))}
    </>
  );
}

export default Categories;
