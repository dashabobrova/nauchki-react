import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

export const OneChildrenWithoutRouter = (props) => {
  const children = useSelector((state) => state.children.children);
  const filteredChildren = children.filter(
    (item) => item.id.toString() === props.match.params.id
  );

  
  console.log(filteredChildren);

  return (
    <div>
      {filteredChildren &&
        filteredChildren.map((children) => (
          <div key={children.id}>
            <p>{children.name}</p>
            <p>Дата рождения: {children.dateOfBirth}</p>
            <ul>
              {children.standartStages.map((st) => (
                <li>{st.skills}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export const OneChildren = withRouter(OneChildrenWithoutRouter);
