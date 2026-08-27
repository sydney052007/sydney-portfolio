import PaintingSeries from "@/components/PaintingSeries";
import PaintingMediums from "@/components/PaintingMediums";
import PaintingPractice from "@/components/PaintingPractice";

export default function PaintingPanel() {
  return (
    <div className="space-y-12">
      <PaintingSeries />
      <PaintingMediums />
      <PaintingPractice />
    </div>
  );
}
