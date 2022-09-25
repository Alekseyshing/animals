import axios from 'axios'

export const authService = (login: string, password: string, url: string) => {

  return axios.post(url, {login, password}).then(response => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }     

      const userData = response.data;
      return userData
    }).catch(e => console.error('Имя пользователя или пароль введены не верно'))
}

