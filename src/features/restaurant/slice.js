import { createSlice } from "@reduxjs/toolkit";
import { MenuCategoryModel, MenuGroupModel, MenuItemModel } from "./models";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    currentPage: "home",
    menuCategories: [
      new MenuCategoryModel({
        id: "507f1f77bcf86cd799430011",
        name: "kitchen",
      }),
      new MenuCategoryModel({ id: "507f1f77bcf86cd799431011", name: "bar" }),
    ],
    menuGroups: [
      new MenuGroupModel({
        id: "507f1f77bcf86cd799430111",
        name: "hot drinks",
        category: "507f1f77bcf86cd799430011",
      }),
      new MenuGroupModel({
        id: "507f1f77bcf86cd799430211",
        name: "snacks",
        category: "507f1f77bcf86cd799430011",
      }),
      new MenuGroupModel({
        id: "507f1f77bcf86cd799430311",
        name: "beef",
        category: "507f1f77bcf86cd799430011",
      }),
      new MenuGroupModel({
        id: "507f1f77bcf86cd799430411",
        name: "chicken",
        category: "507f1f77bcf86cd799430011",
      }),
      new MenuGroupModel({
        id: "507f1f77bcf86cd799430511",
        name: "fish",
        category: "507f1f77bcf86cd799430011",
      }),
      new MenuGroupModel({
        id: "507f1f77bcf86cd799430611",
        name: "african dishes",
        category: "507f1f77bcf86cd799430011",
      }),
      new MenuGroupModel({
        id: "507f1f77bcf86cd799430711",
        name: "side orders",
        category: "507f1f77bcf86cd799430011",
      }),
      new MenuGroupModel({
        id: "507f1f77bcf86cd799430811",
        name: "packages",
        category: "507f1f77bcf86cd799430011",
      }),

      new MenuGroupModel({
        id: "507f1f77bcf86cd799431011",
        name: "sodas",
        category: "507f1f77bcf86cd799431011",
      }),
      new MenuGroupModel({
        id: "507f1f77bcf86cd799431111",
        name: "juices",
        category: "507f1f77bcf86cd799431011",
      }),
      new MenuGroupModel({
        id: "507f1f77bcf86cd799431211",
        name: "beers",
        category: "507f1f77bcf86cd799431011",
      }),
      new MenuGroupModel({
        id: "507f1f77bcf86cd799431311",
        name: "wines",
        category: "507f1f77bcf86cd799431011",
      }),
      new MenuGroupModel({
        id: "507f1f77bcf86cd799431411",
        name: "spirits",
        category: "507f1f77bcf86cd799431011",
      }),
    ],
    menuItems: [
      new MenuItemModel({
        id: "507f1f77bcf86cd799430101",
        name: "african tea",
        group: "507f1f77bcf86cd799430111",
        price: 70,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430102",
        name: "black tea",
        group: "507f1f77bcf86cd799430111",
        price: 50,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430103",
        name: "coffee",
        group: "507f1f77bcf86cd799430111",
        price: 70,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430104",
        name: "hot chocolate",
        group: "507f1f77bcf86cd799430111",
        price: 70,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430105",
        name: "lemon tea",
        group: "507f1f77bcf86cd799430111",
        price: 70,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430106",
        name: "milk",
        group: "507f1f77bcf86cd799430111",
        price: 100,
        isAccompaniment: false,
        removed: false,
      }),

      new MenuItemModel({
        id: "507f1f77bcf86cd799430201",
        name: "mandazi",
        group: "507f1f77bcf86cd799430211",
        price: 50,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430202",
        name: "chapati",
        group: "507f1f77bcf86cd799430211",
        price: 60,
        isAccompaniment: true,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430203",
        name: "beef sausage",
        group: "507f1f77bcf86cd799430211",
        price: 80,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430204",
        name: "boiled eggs",
        group: "507f1f77bcf86cd799430211",
        price: 100,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430205",
        name: "pancake",
        group: "507f1f77bcf86cd799430211",
        price: 150,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430206",
        name: "fried eggs",
        group: "507f1f77bcf86cd799430211",
        price: 100,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430207",
        name: "scrambled eggs",
        group: "507f1f77bcf86cd799430211",
        price: 100,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430208",
        name: "kebab",
        group: "507f1f77bcf86cd799430211",
        price: 100,
        isAccompaniment: false,
        removed: false,
      }),

      new MenuItemModel({
        id: "507f1f77bcf86cd799430701",
        name: "plain rice",
        group: "507f1f77bcf86cd799430711",
        price: 100,
        isAccompaniment: true,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430702",
        name: "pilau",
        group: "507f1f77bcf86cd799430711",
        price: 150,
        isAccompaniment: true,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430703",
        name: "biryani",
        group: "507f1f77bcf86cd799430711",
        price: 150,
        isAccompaniment: true,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430704",
        name: "chips",
        group: "507f1f77bcf86cd799430711",
        price: 120,
        isAccompaniment: true,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430705",
        name: "chips masala",
        group: "507f1f77bcf86cd799430711",
        price: 150,
        isAccompaniment: true,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430706",
        name: "ugali",
        group: "507f1f77bcf86cd799430711",
        price: 100,
        isAccompaniment: true,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430707",
        name: "mokimo",
        group: "507f1f77bcf86cd799430711",
        price: 100,
        isAccompaniment: true,
        removed: false,
      }),

      new MenuItemModel({
        id: "507f1f77bcf86cd799430601",
        name: "minji",
        group: "507f1f77bcf86cd799430611",
        price: 100,
        isAccompaniment: true,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430602",
        name: "githeri",
        group: "507f1f77bcf86cd799430611",
        price: 120,
        isAccompaniment: true,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430603",
        name: "njahe",
        group: "507f1f77bcf86cd799430611",
        price: 100,
        isAccompaniment: true,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430604",
        name: "matoke",
        group: "507f1f77bcf86cd799430611",
        price: 100,
        isAccompaniment: true,
        removed: false,
      }),

      new MenuItemModel({
        id: "507f1f77bcf86cd799430301",
        name: "beef stew",
        group: "507f1f77bcf86cd799430311",
        price: 3300,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430302",
        name: "fried beef",
        group: "507f1f77bcf86cd799430311",
        price: 300,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430303",
        name: "matumbo",
        group: "507f1f77bcf86cd799430311",
        price: 200,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430304",
        name: "liver",
        group: "507f1f77bcf86cd799430311",
        price: 300,
        isAccompaniment: false,
        removed: false,
      }),

      new MenuItemModel({
        id: "507f1f77bcf86cd799430401",
        name: "chicken stew broiler",
        group: "507f1f77bcf86cd799430411",
        price: 500,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430402",
        name: "chicken stew kienyeji",
        group: "507f1f77bcf86cd799430411",
        price: 530,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430401",
        name: "fried chicken broiler",
        group: "507f1f77bcf86cd799430411",
        price: 450,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430402",
        name: "fried chicken kienyeji",
        group: "507f1f77bcf86cd799430411",
        price: 480,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430401",
        name: "roasted chicken broiler",
        group: "507f1f77bcf86cd799430411",
        price: 400,
        isAccompaniment: false,
        removed: false,
      }),
      new MenuItemModel({
        id: "507f1f77bcf86cd799430402",
        name: "roasted chicken kienyeji",
        group: "507f1f77bcf86cd799430411",
        price: 430,
        isAccompaniment: false,
        removed: false,
      }),

      // , accompaniment: ["507f1f77bcf86cd799430707","507f1f77bcf86cd799430706","507f1f77bcf86cd799430705","507f1f77bcf86cd799430704","507f1f77bcf86cd799430703","507f1f77bcf86cd799430702", "507f1f77bcf86cd799430701", "507f1f77bcf86cd799430202"]
    ],
    menuFilter: {
      categoryId: "",
      groupId: "",
      itemSearchString: "",
    },
  },
  reducers: {
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { updateCurrentPage } = restaurantSlice.actions;

export const selectCurrentPage = (state) => state.restaurant.currentPage;
export const selectMenuCategories = (state) => state.restaurant.menuCategories;
export const selectMenuGroups = (state) => state.restaurant.menuGroups;
export const selectMenuItems = (state) => state.restaurant.menuItems;

export default restaurantSlice.reducer;
