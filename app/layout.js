import "./globals.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Trip Expense Splitter",
  description: "Split trip expenses fairly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Logo />
          <Navbar /> {/* <-- NAVBAR for HOME,ABOUT AND CONTACT */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
