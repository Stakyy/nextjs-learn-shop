interface IProps {
  tag: string;
  text: string;
}

const Heading = ({ tag, text }: IProps) => {
  const Tag = (tag || "h1") as any;
  return <Tag>{text}</Tag>;
};

export default Heading;
