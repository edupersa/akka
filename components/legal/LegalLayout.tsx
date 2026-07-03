import LegalHeader from "./LegalHeader";
import Footer from "@/components/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LegalHeader />
      <main className="section" style={{ borderTop: "none" }}>
        <div className="wrap">
          <article className="legal-content">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
}
