import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-rose-100">
      <div className="relative inset-0">
        <img
          src="/images/background-photo.png"
          alt="background-image"
          className="w-full h-full object-cover"
        />
      </div>
      <Container className="relative z-10 min-h-screen bg-transparent font-sans antialiased mt-6 sm:mt-5">
        <div bg-white>
          <h1>naši sponzoři</h1>
        </div>
      </Container>
    </main>
  );
}

function HomePageActions() {
  return <div></div>;
}
