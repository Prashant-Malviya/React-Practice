import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  return (
    <ul className="mt-0 mb-0 list-none" >
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}

export default MenuList;
