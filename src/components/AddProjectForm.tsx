import { useState } from "react";

interface AddProjectFormProps {
  onSubmit: (formData: FormData) => void;
}

export interface FormData {
  title: string;
  description: string;
  address: string;
}

const AddProjectForm: React.FC<AddProjectFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    address: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      description: "",
      address: "",
    });
  };

  return (
    <div className="add-project-form">
      <h3>Add New Project</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Job address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProjectForm;
