import { useState } from "react";
import "../CSS/AddProjectForm.css";
import Logo from "../assets/logo.png";
import { Flex, Heading, Stack, Button, Box, Image } from "@chakra-ui/react";

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
    <Flex align="center" justify="center" minH="100vh">
      <Box className="addProjectForm" p={8}>
        <Flex className="addProjectFormSection" direction="column">
          <Box flex={1} pr={{ base: 0, md: 2 }}>
            <Image src={Logo} height="110px" className="image" />
            <Heading
              className="addProjectFormHeader"
              size="md"
              textAlign="left"
              mb={2}
            >
              Add Project
            </Heading>
            <Stack spacing={1}>
              <form onSubmit={handleSubmit}>
                <input
                  className="input-field"
                  type="text"
                  name="title"
                  placeholder="Project Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
                <input
                  className="input-field"
                  type="text"
                  name="description"
                  placeholder="Job Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
                <input
                  className="input-field"
                  type="text"
                  name="address"
                  placeholder="Job address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  colorScheme="red"
                  className="addProjectSubmit"
                >
                  Add Project
                </Button>
              </form>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AddProjectForm;
