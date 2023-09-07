import React from "react";
import { useForm } from "react-hook-form";

import PageTitle from "../../../components/PageTitle";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { FormInput } from "../../../components/form";

import Select from "react-select";

const FarmRegistration = () => {
  const methods = useForm({
    defaultValues: {
      textInput: "Some Text Value...",
      password: "12345",
      statictext: "email@example.com",
      color: "#7AB840",
    },
  });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Request Advisory",
            path: "/admin/farm-register",
            active: true,
          },
        ]}
        title={"Request Advisory"}
      />
      <Card>
        <Card.Body>
          <h4 className="header-title mb-3 text-info">Request Advisory</h4>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row>
                <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Crop Name</Form.Label>
                <Form.Control type="text" placeholder="Enter crop name" />
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Farm name </Form.Label>
                <Select
                  isMulti={true}
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "farm1", label: "Farm 1" },
                    { value: "farm2", label: "Farm 2" },
                    { value: "farm3", label: "Farm 3" },
                  ]}
                ></Select>
              </Form.Group>
            
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Select Issue </Form.Label>
                <Select
                  isMulti={true}
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "issue1", label: "Issue 1" },
                    { value: "issue2", label: "Issue 2" },
                    { value: "issue3", label: "Issue 3" },
                  ]}
                ></Select>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control type="text" placeholder="Enter owner name" />
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Owner Mobile Number</Form.Label>
                <Form.Control type="text" placeholder="Enter mobile number" />
              </Form.Group>
              <Form.Group as={Col} md={12} className="mb-2">
                <Form.Label>Owner Address</Form.Label>
                <FormInput
                  type="textarea"
                  name="textarea"
                  rows={5}
                  register={register}
                  key="textarea"
                  errors={errors}
                  control={control}
                />
              </Form.Group>
            </Row>
          
            <Row>
              <Form.Group as={Col} className="mb-2" md={4}>
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} className="mb-2" md={4}>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" md={4}>
                <Form.Label>District </Form.Label>
                <Form.Control type="text" placeholder="Enter District " />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" md={4}>
                <Form.Label>Village </Form.Label>
                <Form.Control type="text" placeholder="Enter Village " />
              </Form.Group>

              <Form.Group as={Col} className="mb-2" md={4}>
                <Form.Label>Pincode</Form.Label>
                <Form.Control type="text" placeholder="Enter Pincode " />
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Upload Image</Form.Label>
                <FormInput
                  type="file"
                  name="file"
                  register={register}
                  key="file"
                  errors={errors}
                  control={control}
                />
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Upload Video</Form.Label>
                <FormInput
                  type="file"
                  name="file"
                  register={register}
                  key="file"
                  errors={errors}
                  control={control}
                />
              </Form.Group>
              <Form.Group as={Col} md={12} className="mb-2">
                <Form.Label>Farm Description</Form.Label>
                <FormInput
                  type="textarea"
                  name="textarea"
                  rows={5}
                  register={register}
                  key="textarea"
                  errors={errors}
                  control={control}
                />
              </Form.Group>
            </Row>
            <p className="mt-3"><strong>Note -</strong>This request will be sent to the admin for verification and the admin will allocate an Agro-Advisor for your request.If any changes needed in this application form then the admin will notify you upon further changes.</p>
            <Button
              variant="primary"
              className="btn-bordered rounded-pill waves-effect waves-light btn bg-gradient-info"
              type="submit"
              style={{ border: "none", width: "200px", marginTop: "20px" }}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default FarmRegistration;
