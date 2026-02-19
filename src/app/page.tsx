import Identity from "@/components/Identity/Identity";
import Capabilities from "@/components/Capabilities/Capabilities";

export default function Home() {
  return (
    <div className={""}>
        <Identity />
        <Capabilities />
        <div className={`text-6xl`}>
            Projects
        </div>
    </div>
  );
}
