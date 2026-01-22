import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export const metadata = {
  title: 'John Lydrick Remitar — Portfolio',
  description:
    'John Lydrick Remitar — BSIT student and aspiring Web Developer focused on building modern, functional, and user-friendly web applications.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* ScrollReveal: client helper that triggers reveal animations */}
        <ScrollReveal />
      </body>
    </html>
  );
}
