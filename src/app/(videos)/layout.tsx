import Header from "../_components/Header/Header";
import "../globals.css";
export default function VideoLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
        <Header></Header>
          <div className="flex items-center gap-8">
            <div className="w-[200px] bg-black">SideBar</div>
            {children}
            </div>
        </body>
      </html>
    );
  }
  