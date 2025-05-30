import { Button } from "./ui/button";
import { MovieForm } from "./movie-form";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import type { MovieResponse } from "../types/movie";

interface EditMovieProps {
  movie: MovieResponse;
}

export function EditMovie({ movie }: EditMovieProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="secondary" className="bg-mauve-dark-300/60 text-mauve-dark-1200">
          Editar
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-100" />
        <Dialog.Content className="fixed right-0 top-0 h-screen w-full max-w-[600px] bg-mauve-dark-200 p-6 shadow-lg z-100 overflow-y-auto">
          <Dialog.Title className="text-xl font-bold text-white">
            Editar Filme
          </Dialog.Title>

          <MovieForm 
            initialValues={movie}
            onSuccess={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            submitButtonText="Atualizar Filme"
            isSubmitting={false}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 