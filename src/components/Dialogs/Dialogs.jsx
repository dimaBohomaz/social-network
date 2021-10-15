import s from "./Dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Andrew</div>
        <div className={s.dialog +' '+ s.active}>Dmytro</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Max</div>
        <div className={s.dialog}>Natasha</div>
        <div className={s.dialog}>Romeo</div>
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
