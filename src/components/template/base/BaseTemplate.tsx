export interface IBaseTemplate {
  sampleTextProp: string;
}

export const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>;
};
