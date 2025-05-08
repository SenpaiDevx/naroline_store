import Image from "next/image";
import loader from "@/assets/loader.gif";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
        <Image unoptimized src={loader} width={150} height={150} alt="Loading all lolo mo..."/>
    </div>
  );
};

export default Loading;