import axios from "../config/AxiosConfig";

class ChangeLoginService {

    changeLogin(userId, newPassword) {
        return new Promise((resolve, reject) => {
            axios.patch(`/users/${userId}`, { password: newPassword })
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
        })
    }

}

export default new ChangeLoginService();