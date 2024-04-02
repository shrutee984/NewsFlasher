import image from "../assets/news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb- d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "290px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "190px", width: "275px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "news it is info about something that has just happened."}
        </p>

        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
