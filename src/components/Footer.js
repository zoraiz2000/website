export default function Footer({ profile }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} {profile.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
