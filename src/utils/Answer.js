import axios from "axios";

class Answer {
  constructor() {
    this.url = "http://127.0.0.1:8000/answers/";
  }

  get() {}

  post = async (formData) => {
    try {
      const { data } = await axios.post(this.url, formData);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}

export default Answer;
