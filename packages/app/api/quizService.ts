import axios from './apiClient';

export const getOnBoardingQuiz = async () => {
    return axios.get(`/quiz/api/user/live-onboarding-quiz-v2`).then((res) => res.data.rewardQuiz)
}

export const getRandomQuesByQuizId= async (quizId) => {
    return axios.get(`/quiz/api/user/getRandomQuesByQuizId/${quizId}`).then((res) => res.data)
}

export const addQuizParticipant= async (data) => {
    return axios.post(`/quiz/api/user/add-quiz-participant/v2`, {
        ...data
    }).then((res) => res.data.data)
}

export const addQuizParticipantQues= async data => {
    return axios.post(`/quiz/api/user/add-quiz-participant-ques/v2`, {
        ...data
    }).then((res) => res.data)
}

