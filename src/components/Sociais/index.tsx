import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface SociaisProps {
  color?: string;
}

const Sociais = ({ color = "white" }: SociaisProps) => {
  return (
    <div className="flex space-x-3 items-center">
      <AiFillGithub size={40} color={color} />
      <AiFillLinkedin size={40} color={color} />
    </div>
  );
};

export default Sociais;
