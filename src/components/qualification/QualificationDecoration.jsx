import "../../styles/qualification/qualificationDecoration.css";

function QualificationDecoration({ itemId, list }) {
  return (
    <div>
      <span className="qualification__ball"></span>
      {itemId !== list.length && <span className="qualification__line"></span>}
    </div>
  );
}

export default QualificationDecoration;
