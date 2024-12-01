import { Dashboard } from "@/components/dashboard";
import "@/app/globals.css";

export const metadata = {
  title: "NaijaPrime",
  description: "NaijaPrime",
};

export default function DashboardLayout({ children }) {
  return (
    <div className={`overflow-hidden`}>
      <Dashboard>{children}</Dashboard>
    </div>
  );
}
