// import React, { useEffect, useRef } from "react";

// const AvatarCreator = () => {
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     const handleMessage = (event) => {
//       const origin = "https://readyplayer.me";
//       if (event.origin !== origin) return;

//       if (event.data?.source === "readyplayerme") {
//         console.log("Avatar URL:", event.data.avatarUrl);
//         // Handle the avatar URL (store it, display it, etc.)
//       }
//     };

//     window.addEventListener("message", handleMessage);

//     return () => window.removeEventListener("message", handleMessage);
//   }, []);

//   const iframeUrl = "https://readyplayer.me/avatar";

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         paddingTop: "56.25%", // 16:9 Aspect Ratio
//       }}
//     >
//       <iframe
//         ref={iframeRef}
//         title="Ready Player Me Avatar Creator"
//         src={iframeUrl}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           border: "none",
//         }}
//         allow="camera *; microphone *"
//       ></iframe>

//       {/* Blurred overlay */}
//     </div>
//   );
// };

// export default AvatarCreator;


import { AvatarCreator, AvatarCreatorConfig, AvatarExportedEvent } from '@readyplayerme/react-avatar-creator';

const config: AvatarCreatorConfig = {
  clearCache: true,
  bodyType: 'fullbody',
  quickStart: false,
  language: 'en',
};

const style = { width: '100%', height: '100vh', border: 'none' };

export default function AvatarCreatorPage() {
  const handleOnAvatarExported = (event: AvatarExportedEvent) => {
    console.log(`Avatar URL is: ${event.data.url}`);
  };

  return (
    <>
      <AvatarCreator subdomain="zori" config={config} style={style} onAvatarExported={handleOnAvatarExported} />
    </>
  );
}