import React, { useState, useMemo } from "react";
import { useAppState } from "../../contexts/app-state";
import { UserItem } from "../../components";
import "./style.scss";

export default function MainPanel() {
  const { userList } = useAppState();
  const [search, setSearch] = useState("");
  const displayList = useMemo(() => {
    if (search === "") {
      return userList;
    }

    const filtered = userList.filter((item) => {
      const combinedStr = `${item.name} ${item.email}`;
      if (combinedStr.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
    return filtered;
  }, [userList, search]);

  return (
    <div className="main_panel">
      <div className="main_panel-search">
        <label>
          <b>Search: </b>
        </label>
        <input value={search} onChange={(evt) => setSearch(evt.target.value)} />
      </div>
      {displayList.map((userItem) => (
        <UserItem data={userItem} key={`key-user-${userItem.id}`} />
      ))}
    </div>
  );
}
