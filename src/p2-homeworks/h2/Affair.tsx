import React from 'react';
import {AffairType} from './HW2';
import s from './Affairs.module.css';

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType // need to fix any
  deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
  const deleteCallback = (id: number) => {
    props.deleteAffairCallback(id);
  };// need to fix

  return (
    <div className={s.content}>
      <div className={s.affair}>
        <div
          className={s.affairName}>{props.affair.name}</div>
        <div
          className={props.affair.priority === 'low' ? `${s.affairPriority} ${s.low}` : props.affair.priority === 'high' ? `${s.affairPriority} ${s.high}` : `${s.affairPriority} ${s.middle}`}>{props.affair.priority}</div>
      </div>
      <button className={s.button} onClick={() => deleteCallback(props.affair._id)}>X</button>
    </div>
  );
}

export default Affair;
