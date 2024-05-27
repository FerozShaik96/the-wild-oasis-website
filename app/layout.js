import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel located in the heart of the india ,  surrounded by beautiful architecture and Nature ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-primary-950 text-gray-50">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
