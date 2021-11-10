import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

function getDate(d) {
  let days = d % 365;
  const month = Math.floor(days / 30);
  const weeks = parseInt(days / 7);
  const years = Math.floor(d / 365);
  days -= weeks * 7;

  return {
    years,
    month,
    weeks,
    days,
  };
}

export const OneChildrenWithoutRouter = (props) => {
  const children = useSelector((state) => state.children.children);

  const [dates, setDates] = useState();
  const [filteredChildren, setFilteredChildren] = useState();

  // падало, потому что ф-ю надо за компонент; потому что в переменной первоначально undefined(поэтому сначала создаем переменную, потом ее в стэйт пихаем)
  useEffect(() => {
    const filtered = children.filter((item) => item.id.toString() ===  props.match.params.id);
    setFilteredChildren(filtered);
    const standartStages = filtered.map((t) => t.standartStages);
    setDates(standartStages.map((t) => t.map((t) => getDate(t.days))).flat());
  }, []);


  return (
    <div>
      {filteredChildren &&
        filteredChildren.map((children) => (
          <div key={children.id}>
            <p>{children.name}</p>
            <p>Дата рождения: {children.dateOfBirth}</p>
          </div>
        ))}

      <ul>
        {dates &&
          dates.map((t) => {
            return (
              <li key={t.id}>{`
            ${typeof t.years === 'number' && t.years> 0 ? t.years + "г." : ""} 
            ${typeof t.months === 'number' && t.months> 0 ? t.months + "м." : ""} 
            ${typeof t.weeks === 'number' && t.days==0 && t.weeks>0 ? t.weeks + "нед." : ""} 
            ${typeof t.days === 'number' && t.weeks==0 ? t.days + "д." : ""} 
          `}</li>
            );
          })}
      </ul>
    </div>
  );
};

export const OneChildren = withRouter(OneChildrenWithoutRouter);
