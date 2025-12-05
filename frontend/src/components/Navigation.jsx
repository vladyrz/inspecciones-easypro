import React from "react";

function Navigation({
  onBack,
  isFirst = false,
  isLast = false,
  backLabelFirst = "Volver al inicio",
  backLabel = "Anterior",
  nextLabel = "Continuar",
  finishLabel = "Finalizar",
}) {
  return (
    <div className="flex justify-between pt-4">
      <button
        type="button"
        onClick={onBack}
        className="px-4 py-2 rounded border border-slate-300 text-slate-700 hover:bg-slate-50"
      >
        {isFirst ? backLabelFirst : backLabel}
      </button>

      <button
        type="submit"
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        {isLast ? finishLabel : nextLabel}
      </button>
    </div>
  );
}

export default Navigation;
