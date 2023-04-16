const brandList = [
  {
    alt: "Brand 1",
    img: "/images/brand-01.png",
  },
  {
    alt: "Brand 2",
    img: "/images/brand-02.png",
  },
  {
    alt: "Brand 3",
    img: "/images/brand-03.png",
  },
  {
    alt: "Brand 4",
    img: "/images/brand-04.png",
  },
  {
    alt: "Brand 5",
    img: "/images/brand-05.png",
  },
  {
    alt: "Brand 6",
    img: "/images/brand-06.png",
  },
  {
    alt: "Brand 7",
    img: "/images/brand-07.png",
  },
  {
    alt: "Brand 8",
    img: "/images/brand-08.png",
  },
];

function Brands() {
  return (
    <>
      {brandList.map((brand) => (
        <div className="mx-4 w-25">
          <img src={brand.img} alt={brand.alt} />
        </div>
      ))}
    </>
  );
}

export default Brands;
