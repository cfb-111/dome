import { defineStore } from "pinia";
export const useUserStore = defineStore('user', {
    state: () => (
        {
            user: null
        }
    ),
    getters: {
        getToken: (state) => state.user.token,
        getUserInfo: (state) => state.user
    },
    actions: {
        setUserInfo(userInfo){
            this.user = userInfo;
        }
    },
})