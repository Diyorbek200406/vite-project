import useForm from "./UseForm";

const FormExample = () => {
  const [FormValue, handleChange] = useForm({
    name: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={FormValue.value}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={FormValue.value}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default FormExample;
