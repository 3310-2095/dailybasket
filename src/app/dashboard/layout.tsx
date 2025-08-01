import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "../../../public-dashboard/assets/css/plugins.css";
import "../../../public-dashboard/assets/css/table.css";
import "../../../public-dashboard/assets/css/style.css";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Daily Basket – Everything You Need, Delivered Daily",
    description: "Daily Basket is your trusted online grocery partner. Whether it’s vegetables, fruits, snacks, or personal care, we deliver it all—fresh, fast, and affordable.",
    icons: {
        icon: [
            {
                url: "/assets/images/fav.png",
                type: "image/x-icon",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="dashboard-wrapper">
            {children}
        </div>
    );
}
