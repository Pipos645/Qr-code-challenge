import { QrContainer } from "./components/QrContainer";

function App() {

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <QrContainer />
      <div className="absolute bottom-[0] text-center text-[11px] text-[hsl(228,_45%,_44%)]">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Philippe Brand</a>.
      </div>
    </div>
  );
};

export default App
