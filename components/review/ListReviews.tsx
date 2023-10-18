import React from "react";

const ListReviews = () => {
  return (
    <div className="reviews w-75 mb-5">
      <h3>3 Reviews</h3>
      <hr />
      <div className="review-card my-3">
        <div className="row">
          <div className="col-3 col-lg-1">
            <img
              src="./images/avatar.jpg"
              alt="chuks"
              width="60"
              height="60"
              className="rounded-circle"
            />
          </div>
          <div className="col-9 col-lg-11">
            <div className="star-ratings">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
            <p className="review_user mt-1">by chuks</p>
            <p className="review_comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis
              dolore necessitatibus at quidem nihil laboriosam quod officia
              maxime corporis illo, velit modi iusto natus nam ad incidunt sequi
              doloremque! Fugiat error laboriosam adipisci expedita, vero
              maiores officiis quisquam. Laborum!
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ListReviews;
