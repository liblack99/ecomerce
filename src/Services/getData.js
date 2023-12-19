const URl_API = "https://api.escuelajs.co/api/v1/products";

async function getData() {
  try {
    const response = await fetch(`${URl_API}`);

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
