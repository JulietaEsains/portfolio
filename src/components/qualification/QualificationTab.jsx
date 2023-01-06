import QualificationItem from "./QualificationItem";
import "../../styles/qualification/qualificationTab.css";

function QualificationTab({ contentId, items, currentTab }) {
  return (
    <div
      className={
        currentTab == contentId
          ? "qualification__content active__qualification"
          : "qualification__content"
      }
      data-content-id={contentId}
    >
      {items.map((item) => (
        <QualificationItem key={item.id} item={item} list={items} />
      ))}
    </div>
  );
}

export default QualificationTab;
