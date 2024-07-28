import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: true,
    activePage: 0,
    activeSubPage: "",
    sellSpan: 0,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        showValueSet: (state, action) => {
            state.show = action.payload;
        },
        activePageSet: (state, action) => {
            state.activePage = action.payload;
        },
        activeSubPageSet: (state, action) => {
            state.activeSubPage = action.payload;
        },
        sellSpanSet: (state, action) => {
            state.sellSpan = action.payload;
        },
        backToInitialSellSpan: (state) => {
            state.sellSpan = 0;
        },
        backToInitialSubPage: (state) => {
            state.activeSubPage = "";
        },
        backToInitialPage: (state) => {
            state.activePage = 0;
        },
        backToInitialShow: (state) => {
            state.show = true;
        },
    },
});

export const {
    showValueSet,
    backToInitialShow,
    activePageSet,
    backToInitialPage,
    activeSubPageSet,
    backToInitialSubPage,
    sellSpanSet,
    backToInitialSellSpan,
} = sidebarSlice.actions;
export default sidebarSlice.reducer;
