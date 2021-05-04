const Card = ({ name }) => (
  <div className="profile-card">
    <div className="card-body">
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
)

export default Card