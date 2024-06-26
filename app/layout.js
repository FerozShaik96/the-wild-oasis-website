import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
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
      <body
        className={`${josefin.className} relative flex min-h-screen flex-col bg-primary-950 text-gray-50 antialiased`}
      >
        <Header />
        <div className="grid  flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
