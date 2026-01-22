export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <p>
          © {new Date().getFullYear()} John Lydrick Remitar — Built with Next.js
        </p>
      </div>
    </footer>
  );
}
