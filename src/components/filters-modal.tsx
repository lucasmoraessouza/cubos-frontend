import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Genre, OriginalLanguage } from "../types/enums";
import { Close } from "../assets/icons/close";
import { Input } from "./ui/input";
import { useState } from "react";

interface FiltersModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApplyFilters: (filters: MovieFilterDto) => void;
}

interface MovieFilterDto {
  title?: string;
  minDuration?: number;
  maxDuration?: number;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
  genre?: Genre;
  originalLanguage?: OriginalLanguage;
}

export function FiltersModal({ open, onOpenChange, onApplyFilters }: FiltersModalProps) {
  const [filters, setFilters] = useState<MovieFilterDto>({
    page: 1,
    limit: 10
  });

  const handleApplyFilters = () => {
    onApplyFilters(filters);
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <button className="bg-purple-dark-a200 px-5 py-2.5 rounded-[2px] text-mauve-dark-1200">
          Filtros
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 data-[state=open]:animate-overlayShow z-200" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-mauve-dark-200 p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow z-200 overflow-y-auto">
          <Dialog.Title className="text-xl font-bold text-white">
            Filtros
          </Dialog.Title>

          <div className="mt-6 flex flex-col gap-6">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Título</h3>
              <Input
                type="text"
                placeholder="Buscar por título"
                className="bg-mauve-dark-300"
                value={filters.title || ''}
                onChange={(e) => setFilters(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Duração (minutos)</h3>
              <div className="flex gap-4">
                <Input
                  type="number"
                  placeholder="Mínimo"
                  className="bg-mauve-dark-300"
                  value={filters.minDuration || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, minDuration: parseInt(e.target.value) || undefined }))}
                />
                <Input
                  type="number"
                  placeholder="Máximo"
                  className="bg-mauve-dark-300"
                  value={filters.maxDuration || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxDuration: parseInt(e.target.value) || undefined }))}
                />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Período de Lançamento</h3>
              <div className="flex gap-4">
                <Input
                  type="date"
                  className="bg-mauve-dark-300"
                  value={filters.startDate || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, startDate: e.target.value }))}
                />
                <Input
                  type="date"
                  className="bg-mauve-dark-300"
                  value={filters.endDate || ''}
                  onChange={(e) => setFilters(prev => ({ ...prev, endDate: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Gênero</h3>
              <div className="flex flex-wrap gap-2">
                {Object.values(Genre).map((genre) => (
                  <Button
                    key={genre}
                    variant="secondary"
                    className={`rounded-full px-4 py-2 text-sm ${
                      filters.genre === genre 
                        ? 'bg-purple-dark-a200 text-white' 
                        : 'bg-mauve-dark-300 text-white hover:bg-purple-dark-a200'
                    }`}
                    onClick={() => setFilters(prev => ({ 
                      ...prev, 
                      genre: prev.genre === genre ? undefined : genre 
                    }))}
                  >
                    {genre}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Idioma Original</h3>
              <div className="flex flex-wrap gap-2">
                {Object.values(OriginalLanguage).map((language) => (
                  <Button
                    key={language}
                    variant="secondary"
                    className={`rounded-full px-4 py-2 text-sm ${
                      filters.originalLanguage === language 
                        ? 'bg-purple-dark-a200 text-white' 
                        : 'bg-mauve-dark-300 text-white hover:bg-purple-dark-a200'
                    }`}
                    onClick={() => setFilters(prev => ({ 
                      ...prev, 
                      originalLanguage: prev.originalLanguage === language ? undefined : language 
                    }))}
                  >
                    {language === "en" ? "Inglês" :
                     language === "pt" ? "Português" :
                     language === "es" ? "Espanhol" : "Francês"}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-2">
            <Dialog.Close asChild>
              <Button
                variant="secondary"
                className="rounded-md bg-mauve-dark-300 text-white hover:bg-mauve-dark-300/80"
                onClick={() => setFilters({ page: 1, limit: 10 })}
              >
                Limpar Filtros
              </Button>
            </Dialog.Close>
            <Button 
              className="rounded-md bg-purple-dark-a200 text-white hover:bg-purple-dark-a200/80"
              onClick={handleApplyFilters}
            >
              Aplicar Filtros
            </Button>
          </div>

          <Dialog.Close asChild className="absolute right-4 top-4">
            <Close
              stroke="#B5B2BC"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
