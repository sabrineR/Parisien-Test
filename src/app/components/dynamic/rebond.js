import React from "react";

const Rebond = ({ text }) => {
  return (
    <article className="lp-card-article lp-card-article--small lp-card-article--with-date lp-font-smoothing lp-color-text lp-box-sizing">
      <div className="lp-card-article__content lp-box-sizing">
        <a
          className="lp-card-article__link lp-f-subtitle-06"
          href="/"
          data-page-type="HP"
          data-block-name="En_Continu"
        >
          {text}
          <span className="lp-card-article__nowrap" title="Réservé aux abonnés">
            &nbsp;
            <svg
              className="lp-marker-p lp-marker-p--size-16"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 0H0v16h16V0ZM7.63 9.696c.462-.128 2.77-1.056 2.77-3.616 0-2.176-1.508-2.88-2.985-2.88H6.4v9.6h1.23V9.696Zm0-5.408c.616 0 1.385.352 1.385 1.792 0 1.728-1.23 2.368-1.384 2.4V4.288Z"
                fill="var(--color-subscription)"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </article>
  );
};

export default Rebond;
