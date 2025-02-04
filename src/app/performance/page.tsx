import performanceImg from "/public/performance.jpg";
import Hero from "@/components/Hero";

export default function PerformancePage() {
  return (
    <div>
      <Hero
        imgData={performanceImg}
        imgAlt="welding"
        title="We serve high performance applications"
      />
    </div>
  );
}
