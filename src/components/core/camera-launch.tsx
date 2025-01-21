export default function CameraLaunch() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center justify-center size-52 border-4 border-primary rounded-full mb-7">
        <svg
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.125 33.75C10.125 30.0221 13.1471 27 16.875 27H20.8125C23.5375 27 25.9952 25.3615 27.0433 22.8462L27.8005 21.0288C28.8486 18.5135 31.3063 16.875 34.0311 16.875H46.9689C49.6938 16.875 52.1515 18.5135 53.1995 21.0288L53.9568 22.8462C55.0047 25.3615 57.4624 27 60.1874 27H64.125C67.853 27 70.875 30.0221 70.875 33.75V57.375C70.875 61.103 67.853 64.125 64.125 64.125H16.875C13.1471 64.125 10.125 61.103 10.125 57.375V33.75Z"
            stroke="black"
            strokeOpacity="0.34"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M50.625 43.875C50.625 49.467 46.092 54 40.5 54C34.908 54 30.375 49.467 30.375 43.875C30.375 38.283 34.908 33.75 40.5 33.75C46.092 33.75 50.625 38.283 50.625 43.875Z"
            stroke="#A8A8A8"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <p className="text-xl text-dark-500 font-light">Tap the camera icon</p>
    </div>
  );
}
