import { AiOutlineSearch } from "react-icons/ai";
import { DiUikit } from "react-icons/di";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMenuCategories, selectMenuGroups } from "../pos_slice";

export default function PosFilterBar({}) {
  const dispatch = useDispatch();

  const categories = useSelector(selectMenuCategories);
  const groups = useSelector(selectMenuGroups);

  return (
    <div className="flex flex-col grow-0">
      <div className="flex gap-3 items-stretch rounded-lg">
        <div className="px-2 py-1 grow rounded-md bg-raya-white">
          <label
            for="menu-categories"
            class="block font-bold text-gray-900 dark:text-white"
          >
            Category
          </label>
          <select
            id="menu-categories"
            class="w-full md:w-28 border-b-2 border-raya-secondary text-sm py-2 active:outline-none focus:outline-none"
          >
            <option value={"all"} selected>
              all
            </option>
            {Object.keys(categories).map(function (key) {
              return <option value={key}>{categories[key]["name"]}</option>;
            })}
          </select>
        </div>
        <div className="hidden md:flex grow items-center bg-raya-white px-2 rounded-md">
          <div className="flex grow rounded-md bg-raya-light justify-end">
            <input
              type="text"
              className="text-sm w-full bg-raya-light placeholder:text-raya-secondary placeholder:text-xs rounded-l-md p-2 pl-3 focus:outline-none"
              placeholder="Search items here . .  .   ."
            />
            <button className="px-4 bg-raya-primary rounded-md">
              <AiOutlineSearch className="text-2xl text-raya-white" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-raya-white rounded-md p-2 mt-2 overflow-auto"
        style={{ display: "flex", flexShrink: "" }}
      >
        {Object.keys(groups).map((key) => (
          <div className="border border-raya-primary text-raya-primary capitalize py-1.5 px-3 rounded-full first:ml-0 ml-2">
            {groups[key]["name"]} settling
          </div>
        ))}
      </div>
    </div>
  );
}
