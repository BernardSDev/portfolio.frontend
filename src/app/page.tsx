import Identity from "@/components/Identity/Identity";

export default function Home() {
  return (
    <>
        <Identity />
        <div className={`text-6xl`}>
            Capabilities
        </div>
        <div className={`text-6xl`}>
           Projects
        </div>
    </>
  );
}
