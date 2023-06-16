import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages/*";
import CheckboxContainer from "../components/CheckboxContainer";
import FormHero from "../components/FormHero";
import FormLayout from "../components/FormLayout";
import FormSection from "../components/FormSection";
import FormTextInput from "../components/FormTextInput";
import LinearScaleInput from "../components/LinearScaleInput";
import MultipleChoiceContainer from "../components/MultipleChoiceContainer";
import Option from "../components/Option";

export const config: TemplateConfig = {
  name: "Form",
};

/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: "Static Page Example",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
    ],
  };
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return "form";
};

export default function form() {
  return (
    <>
      <FormLayout>
        <FormHero
          title={`Yext Partner feedback survey`}
          description={`As a valued Yext Partner your feedback is extremely important to us.  Please take a few moments to complete the survey below which will help us to understand how we can support you further.`}
          imageUrl={`https://lh4.googleusercontent.com/BzBdlLke6lwh9vSGJDj1BQOh9WcLvJgxDId80FaC-9D3O4SNwR1_S30ybD_UH6wlV0JidOzZ_ktSKHshBCfyKPR6LcrLXN88iBIFiOCwWEbtEC6-1X7CUOaQ0bJ8tdIsp1x0v5ujQJQ2B2oAojz-wP6Sw3Lymw`}
        />
        <FormSection
          title={`Basic Information`}
          description={`This is a section for basic information.`}
        >
          <FormTextInput
            inputType="Short Answer"
            label={`Email`}
            errorText={``}
            required={true}
            underlineDescription={false}
            italicDescription={false}
            boldDescription={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
            placeholder={``}
            description={``}
            email={true}
          />
          <FormTextInput
            inputType="Short Answer"
            label={`Full Name`}
            errorText={``}
            required={true}
            underlineDescription={false}
            italicDescription={false}
            boldDescription={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
            placeholder={``}
            description={``}
            email={false}
          />
          <FormTextInput
            inputType="Short Answer"
            label={`Company Name`}
            errorText={``}
            required={true}
            underlineDescription={false}
            italicDescription={false}
            boldDescription={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
            placeholder={``}
            description={``}
          />
          <FormTextInput
            inputType="Short Answer"
            label={`Job Title`}
            errorText={``}
            required={true}
            underlineDescription={false}
            italicDescription={false}
            boldDescription={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
          />
          <FormTextInput
            inputType={`Paragraph`}
            label={`Which feature of the Summer '21 Release will be most valuable to you?`}
            errorText={``}
            required={true}
            underlineDescription={false}
            italicDescription={false}
            boldDescription={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
            placeholder={``}
            description={``}
          />
          <LinearScaleInput
            label={`How satisfied are you with Yext’s products?`}
            min={1}
            minLabel={`Not at all satisfied`}
            max={10}
            maxLabel={`Extremely satisfied`}
            required={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
          />
          <LinearScaleInput
            label={`How likely are you to recommend Yext?`}
            min={1}
            minLabel={`Not at all likely`}
            max={10}
            maxLabel={`Extremely likely`}
            required={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
          />
          <MultipleChoiceContainer
            label={`Do you use the Yext scan tool?`}
            description={``}
          >
            <Option />
            <Option />
            <Option value={`No`} />
            <Option value={``} />
          </MultipleChoiceContainer>
          <CheckboxContainer
            label={`How do you use the Yext scan tool?`}
            description={`Please select all that apply`}
            required={false}
            underlineDescription={false}
            italicDescription={false}
            boldDescription={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
          >
            <Option value={`During the sales process`} />
            <Option
              value={`Internal use e.g. for research, pre call planning`}
            />
            <Option value={``} />
            <Option value={``} />
          </CheckboxContainer>
        </FormSection>
      </FormLayout>
    </>
  );
}
