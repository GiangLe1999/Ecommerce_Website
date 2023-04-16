import Button from "../Button";
import styles from "./Blogcard.module.scss";

function BlogCard() {
  return (
    <div className="col-3">
      <div className={`${styles["blog-card"]} bg-white rounded-3 shadow`}>
        <div className={`${styles["card-image"]}`}>
          <img className="img-fluid" src="images/blog-1.jpg" alt="Blog 1" />
        </div>
        <div className={`${styles["blog-content"]}`}>
          <p className={`${styles["date"]}`}>1 Dec, 2022</p>
          <h5 className={`${styles["title"]} my-3`}>
            A beautiful sunday morning renaissance
          </h5>
          <p className={`${styles["description"]} my-3`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            quaerat accusamus officia
          </p>
          <Button to="/blog/:id">READ MORE</Button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
