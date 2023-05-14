// testApiToken.js

import axios from 'axios';

const TeleTestApiToken = async (apiToken) => {
  try {
    const response = await axios.get(`https://api.telegram.org/bot${apiToken}/getMe`);
    console.log(response.data);
  } catch (error) {
    console.error(error.message);
  }
};

export default TeleTestApiToken;
