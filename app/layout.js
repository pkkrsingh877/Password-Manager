import "./globals.css";

export const metadata = {
  title: "Password Manager",
  description: "This application is meant to secure passwords of users and make sure that it is safe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto">

        <header className="bg-blue-500 text-white p-4 text-center">
          <h1>Password Manager</h1>
        </header>

        <main className="bg-gray-100 p-4 mx-auto py-20 w-4/5">
          {children}
        </main>

        <footer className="bg-blue-500 text-white p-4 text-center">
          <p>Footer Section</p>
        </footer>
      </body>
    </html>
  );
}
