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
  return (
    <div className={s.message}>{props.message}</div>
  )
}
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Andrew" id="1" className = {s.dialog}/>

        <DialogItem name="Dmytro" id="2" />

        <DialogItem name="Sveta" id="3" />

        <DialogItem name="Max" id="4" />

        <DialogItem name="Natasha" id="5" />

        <DialogItem name="Romeo" id="6" />
      </div>
      <div className={s.messages}>
        <Message message = 'Hi'/>
        <Message message = 'How is your brain?'/>
        <Message message = 'Yo'/>
        <Message message = 'Yo'/>
        <Message message = 'Yo'/>
      
      </div>
    </div>
  );
};
export default Dialogs;
