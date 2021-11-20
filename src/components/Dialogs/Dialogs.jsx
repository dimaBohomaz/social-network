import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};
const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Andrew" },
    { id: 2, name: "Dmytro" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Max" },
    { id: 5, name: "Natasha" },
    { id: 6, name: "Romeo" },
  ];
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your brain?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          ['hi', 'it is me', 'the cheking']
        }
        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} className={s.dialog}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
      </div>
      <div className={s.messages}>
        {/* <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} /> */}
      </div>
    </div>
  );
};
export default Dialogs;
