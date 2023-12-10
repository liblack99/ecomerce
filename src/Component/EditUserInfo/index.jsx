import {useRef} from "react";

function EditUserInfo({setView}) {
  const form = useRef(null);
  //   const editAccount = () => {
  //     const formData = new FormData(form.current);
  //     const data = {
  //       name: formData.get("name"),
  //       email: formData.get("email"),
  //       password: formData.get("password"),
  //     };
  //   };

  return (
    <form ref={form} className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-light text-sm">
          Your name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue="name"
          placeholder="Peter"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-light text-sm">
          Your email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          defaultValue="email"
          placeholder="hi@helloworld.com"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-light text-sm">
          Your password:
        </label>
        <input
          type="text"
          id="password"
          name="password"
          defaultValue="password"
          placeholder="******"
          className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
        />
      </div>
      <button
        className="bg-black text-white w-full rounded-lg py-3"
        onClick={() => {
          setView("user-info");
        }}
      >
        Edit
      </button>
    </form>
  );
}
export default EditUserInfo;
