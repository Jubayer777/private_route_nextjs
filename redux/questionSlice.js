import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exams: [],
    currentQuestion: {},
    allQuestions: [],
    currentAnswers: [],
    currentExam: {},
    allSubmission:[],
    codeLanguage:null
};

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        setExams: (state, action) => {
            state.exams = action.payload;
        },
        setAllSubmission: (state, action) => {
            state.allSubmission = action.payload;
        },
        setCurrentExam: (state, action) => {
            state.currentExam = action.payload;
        },
        setCodeLanguage: (state, action) => {
            state.codeLanguage = action.payload;
        },
        setCurrentQuestion: (state, action) => {
            state.currentQuestion = action.payload;
        },
        setCurrentAnswers: (state, action) => {
            state.currentAnswers = action.payload;
        },
        setAllQuestions: (state, action) => {
            state.allQuestions = action.payload;
        },
        backToInitialCurrentQuestion: (state) => {
            state.currentQuestion = {};
        },
        backToInitialCurrentAnswers: (state) => {
            state.currentAnswers = [];
        },
        backToInitialAllQuestions: (state) => {
            state.allQuestions = [];
        },
        backToInitialExams: (state) => {
            state.exams = [];
        },
        backToInitialCurrentExam: (state) => {
            state.currentExam = {};
        },
        backToInitialAllSubmission: (state) => {
            state.allSubmission = [];
        },
        backToInitialCodeLanguage: (state, action) => {
            state.codeLanguage = null;
        },
    },
});

export const {
    setExams,
    backToInitialExams,
    setCurrentQuestion,
    backToInitialCurrentQuestion,
    setAllQuestions,
    backToInitialAllQuestions,
    setCurrentAnswers,
    backToInitialCurrentAnswers,
    setCurrentExam,
    backToInitialCurrentExam,
    setAllSubmission,
    backToInitialAllSubmission,
    setCodeLanguage,
    backToInitialCodeLanguage
} = questionSlice.actions;
export default questionSlice.reducer;
