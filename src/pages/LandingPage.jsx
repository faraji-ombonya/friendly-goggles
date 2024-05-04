import { useState } from "react";
import DiagnosisForm from "../components/DiagnosisForm";
import SimpleDialog from "../components/Dialog";
import MainCanvas from "../layouts/MainCanvas";

function LandingPage() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState({});

  console.log("open", open);

  return (
    <>
      <MainCanvas>
        <DiagnosisForm setResult={setResult} setOpen={setOpen} />
        <SimpleDialog setOpen={setOpen} open={open} result={result} />
      </MainCanvas>
    </>
  );
}

export default LandingPage;
