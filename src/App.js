import { useState, useRef } from "react";

function App() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(document.createElement("canvas"));
  const [snapshotUrl, setSnapshotUrl] = useState("");

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false
      });
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error(error);
    }
  };

  const snapShot = () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = canvasRef.current;
    canvas.width = video.videoWidth || 300;
    canvas.height = video.videoHeight || 400;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/png");
    setSnapshotUrl(dataUrl);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", justifyContent: "center",background:"linear-gradient(to bottom, red , gray" }}>
      <video
        ref={videoRef}
        style={{ width: "300px", height: "400px", backgroundColor: "black" }}
        autoPlay
        muted
      ></video>

      <button style={{ backgroundColor: "black", color: "white", padding: "10px 20px" }} onClick={startCamera}>
        Start Camera
      </button>

      <button style={{ backgroundColor: "black", color: "white", padding: "10px 20px" }} onClick={snapShot}>
        Take Snapshot
      </button>

      {snapshotUrl && (
        <img src={snapshotUrl} alt="snapshot" style={{ width: "300px", height: "200px", border: "2px solid black", objectFit:"contain"}} />
      )}
    </div>
  );
}

export default App;
