import axios from "axios";

export const useData = async () => {
  let data = [];
  try {
    await axios
      .get(`https://fedskillstest.coalitiontechnologies.workers.dev`, {
        headers: {
          Authorization: `Basic Y29hbGl0aW9uOnNraWxscy10ZXN0`,
        },
      })
      .then(function (response) {
        // handle success
        data = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  } catch (error) {
    console.log(error.message);
  }
  return data;
};
