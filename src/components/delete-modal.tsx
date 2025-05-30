import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Close } from "../assets/icons/close";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useMovieOperations } from "../hooks/useMovieOperation";
import { useQueryClient } from "@tanstack/react-query";

interface DeleteMovieModalProps {
  movieId: string;
  movieTitle: string;
}

export function DeleteMovieModal({
  movieId,
  movieTitle,
}: DeleteMovieModalProps) {
  const navigate = useNavigate();
  const { deleteMovie, isLoading } = useMovieOperations();
  const queryClient = useQueryClient();
  const handleDelete = async () => {
    try {
      const success = await deleteMovie(movieId);

      if (success) {
        toast.success("Filme excluído com sucesso!");
        queryClient.invalidateQueries({ queryKey: ["movies"] });

        navigate("/home");
      }
    } catch (error) {
      toast.error("Erro ao excluir o filme");
      console.error(error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="primary" className=" text-mauve-dark-1200 w-full lg:w-fit">
          Excluir
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 data-[state=open]:animate-overlayShow z-200" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-mauve-dark-200 p-6 shadow-lg focus:outline-none data-[state=open]:animate-contentShow z-200">
          <Dialog.Title className="text-xl font-bold text-white">
            Confirmar Exclusão
          </Dialog.Title>

          <div className="mt-4 text-mauve-dark-1100">
            Tem certeza que deseja excluir o filme "{movieTitle}"? Esta ação não
            pode ser desfeita.
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <Dialog.Close asChild>
              <Button
                variant="secondary"
                className="bg-mauve-dark-300 text-white hover:bg-mauve-dark-300/80"
              >
                Cancelar
              </Button>
            </Dialog.Close>
            <Button
              variant="primary"
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? "Excluindo..." : "Excluir Filme"}
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
