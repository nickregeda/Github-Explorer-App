import * as Yup from "yup";

const githubExplorerValidationSchema = Yup.object().shape({
    query: Yup.string()
        .required("I need username"),
});
export default githubExplorerValidationSchema;