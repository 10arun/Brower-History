import './index.css'

const AppProfile = props => {
  const {appDetails, deleteApp} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = appDetails

  const onDelete = () => {
    deleteApp(id)
  }
  return (
    <li className="app-card-container">
      <div className="app-container">
        <div>
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} className="app-logo" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>

        <div className="button-container">
          <button
            type="button"
            className="button"
            data-testid="delete"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AppProfile
