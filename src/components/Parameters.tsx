import React, { useState } from "react";

interface ProstheticFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hipProsthesis: boolean;
  kneeProsthesis: boolean;
}

const ProstheticForm: React.FC = () => {
  const [formData, setFormData] = useState<ProstheticFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hipProsthesis: false,
    kneeProsthesis: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Aquí puedes hacer lo que necesites con los datos del formulario
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>
          Prótesis de cadera:
          <input
            type="checkbox"
            name="hipProsthesis"
            checked={formData.hipProsthesis}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Prótesis de rodilla:
          <input
            type="checkbox"
            name="kneeProsthesis"
            checked={formData.kneeProsthesis}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ProstheticForm;