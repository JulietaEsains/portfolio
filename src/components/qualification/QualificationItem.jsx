import UilCalendarAlt from "@iconscout/react-unicons/icons/uil-calendar-alt";
import QualificationDecoration from "./QualificationDecoration";
import "../../styles/qualification/qualificationItem.css";

function QualificationItem({ item, list }) {
  return (
    <div className="qualification__data">
      {item.id % 2 == 0 && (
        <>
          <div></div>
          <QualificationDecoration itemId={item.id} list={list} />
        </>
      )}
      <div className="qualification__data__filling">
        <h3 className="qualification__title">{item.title}</h3>
        <span className="qualification__subtitle">{item.subtitle}</span>
        <div className="qualification__calendar">
          <UilCalendarAlt className="qualification__calendar-icon" />
          {item.calendar}
        </div>
      </div>
      {item.id % 2 == 1 && (
        <>
          <QualificationDecoration itemId={item.id} list={list} />
          <div></div>
        </>
      )}
    </div>
  );
}

export default QualificationItem;
