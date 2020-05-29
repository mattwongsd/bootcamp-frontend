import CustomTextField from "../../components/CustomTextField";
import CustomSubmitButton from "../../components/CustomSubmitButton";
import CustomNumberInput from "../../components/CustomNumberInput";
import { Form } from "carbon-components-react";
import {
  validateName,
  validateDescription,
  validateEmail,
  validatePhone,
  validateWebsite,
  validateAverageRating,
} from "../../utils/validate";
import Head from "next/head";
import Layout from "../../components/Layout";

const CreateBootcampPage = (props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Bootcamp - Create</title>
        </Head>
        <main>
          <div className="bx--grid bx--grid--full-width create-bootcamp-page">
            <Form onSubmit={(e) => e.preventDefault()}>
              <CustomTextField
                id="create-bootcamp-name-field"
                name="name"
                placeholder="Name"
                labelText="Name"
                validate={validateName}
              />
              <CustomTextField
                id="create-bootcamp-description-field"
                name="description"
                placeholder="Description"
                labelText="Description"
                validate={validateDescription}
              />
              <CustomTextField
                id="create-bootcamp-website-field"
                name="website"
                placeholder="Website"
                labelText="Website"
                validate={validateWebsite}
              />
              <CustomTextField
                id="create-bootcamp-phone-field"
                name="phone"
                placeholder="+65 95849584 or 94857547"
                labelText="Phone"
                validate={validatePhone}
              />
              <CustomTextField
                id="create-bootcamp-email-field"
                name="email"
                placeholder="johndoe@example.com"
                labelText="Email"
                validate={validateEmail}
              />
              <CustomNumberInput
                id="create-bootcamp-averageRating-field"
                name="averageRating"
                label="Average Rating"
                helperText="Min: 1, Max: 5"
                initialValue={5}
                min={1}
                max={5}
                step={1}
                validate={validateAverageRating}
              />
              <CustomSubmitButton text="Submit" />
            </Form>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default CreateBootcampPage;
