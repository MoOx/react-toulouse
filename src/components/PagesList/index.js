import React from "react";

import PagePreview from "../PagePreview";

const PagesList = ({ path, pages }) => {
  return (
    <div>
      {pages.length ? (
        <ul style={{ margin: 0, padding: 0 }}>
          {pages.map(page => (
            <li key={page.title}>
              <PagePreview path={path} {...page} />
            </li>
          ))}
        </ul>
      ) : (
        "No posts yet."
      )}
    </div>
  );
};

export default PagesList;
