import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const AutoPlayVideo = () => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (inView) {
        video.play();
      } else {
        video.pause();
      }
    }
  }, [inView]);

  return (
    <div ref={ref} className="flex justify-center my-28 px-5">
      <video
        ref={videoRef}
        width="100%"
        height="476"
        muted
        controls
        preload="auto"
        playsInline
        className="rounded-lg"
      >
        <source src="https://res.cloudinary.com/dovnztfxq/video/upload/v1752600292/AQOnuiGyVEy_d_UIUtRlDB6zAQBGYThlwl8L5VQLkMBmbAbjoq9alm_sBQOjS4mP-PMeIy8Dg500-g-kj7ytY6K-6xuR96EqxezZB_2xgVKsbA_a2ifpa.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AutoPlayVideo;
