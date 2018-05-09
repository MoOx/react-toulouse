import React from "react"
import { Link } from "react-router"

const PagePreview = ({ path, id, title, date }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div>
      <Link to={`${path}/${id}`}>
        { title }
      </Link>
      {
        pageDate &&
        <small>
          { " " }
          <time key={ pageDate.toISOString() }>
            { pageDate.toDateString() }
          </time>
        </small>
      }
    </div>
  )
}

export default PagePreview
