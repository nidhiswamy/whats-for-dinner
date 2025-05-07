import Button from "./Button";

function SpinButton({ handleSpin, spinning }) {
  return (
    <Button onClick={handleSpin} disabled={spinning}>
      {spinning ? "Spinning..." : "Spin"}
    </Button>
  );
}

export default SpinButton;
