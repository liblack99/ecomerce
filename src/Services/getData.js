const URl_API = "https://api.escuelajs.co/api/v1/products";

async function getData(text = "") {
  let query = text === "" ? "" : `/?title=${text}`;

  try {
    const response = await fetch(`${URl_API}${query}`);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("No data");
    }
  } catch (error) {
    console.error(error);
  }
}
export default getData;
