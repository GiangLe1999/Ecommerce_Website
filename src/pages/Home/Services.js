const servicesList = [
  {
    img: "images/service.png",
    alt: "Free Shipping",
    name: "Free Shipping",
    description: "Free all orders over $100",
  },
  {
    img: "images/service-02.png",
    alt: "Daily Surprise Offers",
    name: "Daily Surprise Offers",
    description: "Save up to 25% off",
  },
  {
    img: "images/service-03.png",
    alt: "Support 24/7",
    name: "Support 24/7",
    description: "Shop with an expert",
  },
  {
    img: "images/service-04.png",
    alt: "Affordable Prices",
    name: "Affordable Prices",
    description: "Get Factory direct price",
  },
  {
    img: "images/service-05.png",
    alt: "Secure Payments",
    name: "Secure Payments",
    description: "100% Protected Payments",
  },
];

function Services() {
  return (
    <>
      {servicesList.map((service) => (
        <div className="d-flex align-items-center gap-3">
          <img src={service.img} alt={service.alt} />
          <div>
            <h6>{service.name}</h6>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Services;
