import React from 'react';
import './errorPage.css';

function ErrorPage() {
  return (
    <div>
      <div className="error-page">
        {/* <div>
          <img src={Logo} className="img-404" alt="4445" />
        </div> */}
        <div className="box1">
          <h2 className="box2">
            4<span className="zero"></span>4
          </h2>
        </div>
        <h2 className="box3">404</h2>

        <div className="h3">
          <h3>Sorry! Page not found</h3>
        </div>

        <div className="button">
          <a href="/" className="link_404">
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
