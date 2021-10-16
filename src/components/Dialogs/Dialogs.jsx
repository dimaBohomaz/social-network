import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to = '/dialogs/1' >Andrew</NavLink>
          </div>
        <div className={s.dialog +' '+ s.active}>
        <NavLink to = '/dialogs/2' >Dmytro</NavLink>
          </div>
        <div className={s.dialog}>
        <NavLink to = '/dialogs/3' >Sveta</NavLink>
          </div>
        <div className={s.dialog}>
        <NavLink to = '/dialogs/4' >Max</NavLink>
          </div>
        <div className={s.dialog}>
        <NavLink to = '/dialogs/5' >Natasha</NavLink>
          </div>
        <div className={s.dialog}>
        <NavLink to = '/dialogs/6' >Romeo</NavLink>
          </div>
      </div>
      <div className={s.messages}>
<div className={s.message}>Hi</div>
<div className={s.message}>How is your brain?</div>
<div className={s.message}>It's fine</div>
      </div>
    </div>
  );
};
export default Dialogs;
