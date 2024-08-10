import reliabilityImg from "/public/reliability.jpg";
import Hero from "@/components/Hero";

export default function ReliabilityPage() {
  return (
    <div>
      <Hero
        imgData={reliabilityImg}
        imgAlt="welding"
        title="Super high reliabilty hosting"
      />
    </div>
  );
}
