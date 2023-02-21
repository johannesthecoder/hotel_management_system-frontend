import { createSlice } from "@reduxjs/toolkit";

export const posSlice = createSlice({
  name: "pos",
  initialState: {
    currentPage: "home",
    menu: {
      categories: {
        29876543211234: { name: "kitchen" },
        29876543211235: { name: "bar" },
      },
      groups: {
        12345678900987: { name: "beef", category: "09876543211234" },
        12345678900986: { name: "chicken", category: "09876543211234" },
        12345678900985: { name: "fish", category: "09876543211234" },
        12345678900984: { name: "snack", category: "09876543211234" },
        12345678900983: { name: "soda", category: "09876543211235" },
        12345678900982: { name: "juice", category: "09876543211235" },
      },
      items: {
        "02345678900987": {
          name: "beef stew",
          group: "12345678900987",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900987": {
          name: "drr fry beef",
          group: "12345678900987",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900987": {
          name: "chicken stew",
          group: "12345678900986",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900987": {
          name: "drr fry chicken",
          group: "12345678900986",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900987": {
          name: "fish stew",
          group: "12345678900985",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900987": {
          name: "drr fry fish",
          group: "12345678900985",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900986": {
          name: "chapati",
          group: "12345678900984",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900985": {
          name: "mandazi",
          group: "12345678900984",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900984": {
          name: "beef sausage",
          group: "12345678900984",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900983": {
          name: "samosa",
          group: "12345678900984",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900982": {
          name: "fried eggs",
          group: "12345678900984",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900987": {
          name: "coke",
          group: "12345678900983",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900986": {
          name: "sprite",
          group: "12345678900983",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900985": {
          name: "fanta",
          group: "12345678900983",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900984": {
          name: "passion",
          group: "12345678900982",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900983": {
          name: "cocktail",
          group: "12345678900982",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
        "02345678900982": {
          name: "mango",
          group: "12345678900982",
          price: Math.round(Math.random() * (700 - 50)) + 50,
        },
      },
      filter: {
        category_id: "09876543211234",
        group_id: "12345678900984",
        item_name_regex: "",
      },
    },
  },
  reducers: {
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { updateCurrentPage } = posSlice.actions;

export const selectCurrentPage = (state) => state.pos.currentPage;
export const selectMenuCategories = (state) => state.pos.menu.categories;
export const selectMenuGroups = (state) => state.pos.menu.groups;
export const selectMenuItems = (state) => state.pos.menu.items;

export default posSlice.reducer;
