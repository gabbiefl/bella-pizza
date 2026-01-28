// não é recomendado utilizar any como type
// type e placeholder são exclusivos da tag input, para encontrar o tipo delas basta passar o mouse sobre type="" ou placeholder-""

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="align-center flex justify-center">
      <input
        {...props}
        className="w-100 rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 transition-colors focus:border-red-700 focus:ring-1 focus:ring-red-700/50 focus:outline-none"
      />
    </div>
  );
};

export default Input;

// outra solucao, nao tao dinamica:

// const Input = ({ title, type }: { title: string; type: string }) => {
//   return (
//     <div className="align-center flex justify-center">
//       <input
//         type={type}
//         placeholder={title}
//         className="w-100 rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 transition-colors focus:border-red-700 focus:ring-1 focus:ring-red-700/50 focus:outline-none"
//       />
//     </div>
//   );
// };

// export default Input;
