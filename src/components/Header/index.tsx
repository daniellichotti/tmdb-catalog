import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

export function Header() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate(); // Hook do react-router-dom para navegação

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputValue) {
      // Navegar para a página com o valor do input
      navigate(`/search/${inputValue}`);
    }
  };

  return (
    <div className="flex items-center justify-between bg-secondary p-3">
      <a href="/">
        <h1 className="text-slate-300 text-3xl">Filmes</h1>
      </a>
      <Input
        type="text"
        className="h-10 w-72 text-base border-1 border-slate-600 "
        placeholder="Buscar Filme..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress} // Ao pressionar Enter
      />
      <div className="flex items-center gap-4">
        <p className="text-slate-300 text-xl">Mais</p>
        <ModeToggle />
      </div>
    </div>
  );
}
