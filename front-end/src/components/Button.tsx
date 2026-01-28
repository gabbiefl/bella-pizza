type ButtonProps = {
  title: string;
  theme?: "primary" | "secondary"; //"?:" significa que é opcional
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // para herdar as propriedades padrão de um botão

const Button = ({ title, theme = "primary", ...props}: ButtonProps) => {
  const themeSelection = () => {
    if (theme === "primary") {
      return "w-full cursor-pointer rounded-lg border bg-red-700 px-4 py-2 font-medium text-white transition-colors hover:bg-red-800";
    } else {
      return "w-full cursor-pointer rounded-lg border border-red-700 bg-transparent px-4 py-2 font-medium text-red-700 transition-colors hover:bg-red-50";
    }
  };

  return (
    <button {...props}type="submit" className={themeSelection()}>
      {title}
    </button>
  );
};

export default Button;
