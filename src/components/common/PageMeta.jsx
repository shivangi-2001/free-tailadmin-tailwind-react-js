
const PageMeta = ({ title, description, }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
  </>
);

export const AppWrapper = ({ children }) => ( {children} );
export default PageMeta;
