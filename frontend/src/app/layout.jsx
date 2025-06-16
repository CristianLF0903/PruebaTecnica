import "./globals.css";

export const metadata = {
  title: "Employees",
  description: "Basic CRUD app with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
