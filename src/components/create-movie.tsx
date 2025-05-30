import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Close } from "../assets/icons/close";
import { MovieForm } from "./movie-form";
import { initialValuesMovie } from "../schemas/movie";
import { useState } from "react";
import { toast } from "sonner";
import { useMovieOperations } from "../hooks/useMovieOperation";
import type { MovieCreateRequest } from "../types/movie";

export function CreateMovie() {
  const [open, setOpen] = useState(false);
  const { createMovie, isLoading } = useMovieOperations();

  const handleSubmit = async (values: MovieCreateRequest) => {
    if (!values.imageUrl || !((values.imageUrl as any) instanceof File)) {
      toast.error("É necessário selecionar uma imagem para o poster");
      return;
    }

    const success = await createMovie(
      values as typeof initialValuesMovie & { imageUrl: File, voteCount: number }
    );

    if (success) {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="primary">Adicionar Filme</Button>
      </DialogTrigger>

      <DialogContent>
        <div className="flex justify-between items-start space-y-4">
          <div>
            <DialogTitle className="text-2xl text-white mb-2">
              Adicionar filme
            </DialogTitle>
            <DialogDescription className="text-mauve-dark-1100 mt-2">
              Adicione um novo filme à sua coleção. Preencha os detalhes do
              filme que você deseja incluir.
            </DialogDescription>
          </div>

          <DialogClose>
            <Close
              stroke="#B5B2BC"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </DialogClose>
        </div>

        <MovieForm
          initialValues={initialValuesMovie}
          onSuccess={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          submitButtonText="Criar Filme"
          isSubmitting={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
}
