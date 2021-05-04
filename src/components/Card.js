const Card = ({ name, image }) => (
  <div className="profile-card">
    <img className="card-img" src={ image } alt={ name } />
    <div className="card-body">
      <div className="card-content">
        <h2 className="card-title">{ name }</h2>
        <div className="card-links">
          <a className="link-title" href="/">
            <ion-icon name="logo-facebook" />
          </a>
          <a className="link-title" href="/">
            <ion-icon name="logo-twitter" />
          </a>
          <a className="link-title" href="/">
            <ion-icon name="logo-instagram" />
          </a>
          <a className="link-title" href="/">
            <ion-icon name="logo-github" />
          </a>
          <a className="link-title" href="/">
            <ion-icon name="logo-dribbble" />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Card