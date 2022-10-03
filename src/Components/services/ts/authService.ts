import axios from 'axios'

export const authService = (login: string, password: string, url: string) => {
  return axios.post(url, { login, password }).then(response => {
    if (response.data.accessToken) {
      const EXPIRE_TIME = 600000;
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', JSON.stringify(response.data.accessToken));

      setTimeout(function () {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }, EXPIRE_TIME);
    }

    const userData = response.data;
    return userData
  }).catch(error => {
    console.log(`Имя пользователя или пароль введены не верно: ${error.message}`)
  })
}

