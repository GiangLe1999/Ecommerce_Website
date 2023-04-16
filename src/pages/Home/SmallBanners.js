import styles from "./Home.module.scss";

const smallBannerList = [
  {
    id: "sm-banner1",
    img: "images/catbanner-01.jpg",
    alt: "Small Banner 1",
    title: "BEST SALES",
    subtitle: "Laptops Max",
    line1: "From $1699.00 or",
    line2: "$64.62/mo.",
  },
  {
    id: "sm-banner2",
    img: "images/catbanner-03.jpg",
    alt: "Small Banner 2",
    title: "NEW ARRIVAL",
    subtitle: "Buy iPad Air",
    line1: "From $599.00 or",
    line2: "$49.91/mo. for 12 mo. *",
  },
  {
    id: "sm-banner3",
    img: "images/catbanner-02.jpg",
    alt: "Small Banner 3",
    title: "15% OFF",
    subtitle: "Smartwatch7",
    line1: "Shop the latest band",
    line2: "styles and colors.",
  },
  {
    id: "sm-banner4",
    img: "images/catbanner-04.jpg",
    alt: "Small Banner 4",
    title: "FREE ENGRAVING",
    subtitle: "AirPods Max",
    line1: "High-fidelity playback &",
    line2: "ultra-low distortion.",
  },
];

function SmallBanners() {
  return (
    <>
      {smallBannerList.map((smallBanner) => (
        <div className={`${styles["small-banner"]} col-6 position-relative`}>
          <img
            src={smallBanner.img}
            className="img-fluid rounded-3"
            alt={smallBanner.alt}
          />
          <div
            className={`${styles["small-banner-content"]} position-absolute`}
          >
            <h4>{smallBanner.title}</h4>
            <h5>{smallBanner.subtitle}</h5>
            <p>{smallBanner.line1}</p>
            <p>{smallBanner.line2}</p>
          </div>
        </div>
      ))}{" "}
    </>
  );
}

export default SmallBanners;
