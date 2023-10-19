import { quicksand } from "./font";
import "./globals.css";
import ReduxProvider from "./globalRedux/provider";
import { ContextProvider } from "./globalContext/store";

export const metadata = {
  title: "AnimeMoi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en" className={quicksand.className}>
        <body>
          <ContextProvider>{children}</ContextProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}
