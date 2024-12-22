import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignatureField = () => {
  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();

  return (
    <div className="signature-container">
      <h2>Signature</h2>
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{
          width: 500,
          height: 200,
          className: 'sigCanvas border-2 border-dashed border-gray-400', // Dashed border applied
        }}
      />
      <div className="buttons mt-4">
        <button type="button" onClick={clear} className="clear-button">
          {/* SVG for Refresh Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v6h6M20 20v-6h-6M4 20h16M20 4H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SignatureField;
