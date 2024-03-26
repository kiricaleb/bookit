import React from "react";

const NewReviews = () => {
  return (
    <>
      <button
        type="button"
        className="btn form-btn mt-4 mb-5"
        data-bs-toggle="modal"
        data-bs-target="#ratingModal"
      >
        Submit Your Review
      </button>
      <div
        className="modal fade"
        id="ratingModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="ratingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ratingModalLabel">
                Submit Review
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                architecto.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn my-3 form-btn w-100"
                data-bs-dismiss="modal"
                aria-label="close"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewReviews;
