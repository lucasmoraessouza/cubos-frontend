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
import { initialValuesMovie, validationMovieSchema } from "../schemas/movie";
import { useState } from "react";
import { toast } from "sonner";
import { useMovieOperations } from "../hooks/useMovieOperation";
import { useFormik } from "formik";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import {
  Genre,
  genreLabels,
  languageLabels,
  OriginalLanguage,
} from "../types/enums";
import { Upload } from "../assets/icons/upload";
import type { CreateMovieRequest } from "../types/movie";
import { CurrencyInput } from "./currency-input";

export function CreateMovie() {
  const [open, setOpen] = useState(false);
  const { createMovie, isLoading } = useMovieOperations();

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value === "" ? "" : Number(value));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
  };

  const handleSubmit = async (values: CreateMovieRequest) => {
    try {
      const success = await createMovie(values);

      if (success) {
        toast.success("Filme criado com sucesso!");
        setOpen(false);
      }
    } catch (error) {
      toast.error("Erro ao criar o filme");
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: initialValuesMovie,
    validationSchema: validationMovieSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="primary" className="w-full md:w-fit">
          Adicionar Filme
        </Button>
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

        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>Título Original</Label>
                <Input
                  name="originalTitle"
                  placeholder="Digite o título original"
                  className="mt-2"
                  value={formik.values.originalTitle}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.originalTitle &&
                  formik.errors.originalTitle && (
                    <span className="text-red-500 text-sm">
                      {formik.errors.originalTitle}
                    </span>
                  )}
              </div>

              <div>
                <Label>Título em Português</Label>
                <Input
                  name="portugueseTitle"
                  placeholder="Digite o título em português"
                  className="mt-2"
                  value={formik.values.portugueseTitle}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.portugueseTitle &&
                  formik.errors.portugueseTitle && (
                    <span className="text-red-500 text-sm">
                      {formik.errors.portugueseTitle}
                    </span>
                  )}
              </div>
            </div>

            <div>
              <Label>Sinopse</Label>
              <Textarea
                name="synopsis"
                rows={1}
                placeholder="Digite a sinopse do filme"
                className="mt-2"
                value={formik.values.synopsis}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.synopsis && formik.errors.synopsis && (
                <span className="text-red-500 text-sm">
                  {formik.errors.synopsis}
                </span>
              )}
            </div>

            <div>
              <Label>Poster do Filme</Label>
              <label
                htmlFor="poster"
                className="mt-2 bg-mauve-dark-200 border rounded border-mauve-dark-600 p-4 w-full h-11 font-roboto font-normal text-[16px] text-mauve-dark-1200 focus-within:border-purple-dark-900 cursor-pointer flex items-center gap-2 hover:border-purple-dark-900 transition-colors"
              >
                <Upload fill="#B5B2BC" width={24} height={24} />
                <span className="text-mauve-dark-1100">
                  {formik.values.poster
                    ? "Arquivo selecionado"
                    : "Escolher arquivo"}
                </span>
                <input
                  type="file"
                  id="poster"
                  name="poster"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "poster",
                      event.currentTarget.files?.[0]
                    );
                  }}
                  onBlur={formik.handleBlur}
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Popularidade</Label>
                <Input
                  type="number"
                  name="popularity"
                  placeholder="Ex: 42.595"
                  className="mt-2"
                  value={formik.values.popularity}
                  onChange={handleNumberChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.popularity && formik.errors.popularity && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.popularity}
                  </span>
                )}
              </div>
              <div>
                <Label>Votos</Label>
                <Input
                  type="number"
                  name="voteCount"
                  placeholder="Ex: 42.595"
                  className="mt-2"
                  value={formik.values.voteCount}
                  onChange={handleNumberChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.voteCount && formik.errors.voteCount && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.voteCount}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Data de Lançamento</Label>
                <Input
                  type="date"
                  name="releaseDate"
                  className="mt-2"
                  value={formik.values.releaseDate}
                  onChange={handleDateChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.releaseDate && formik.errors.releaseDate && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.releaseDate}
                  </span>
                )}
              </div>
              <div>
                <Label>Duração (minutos)</Label>
                <Input
                  type="number"
                  name="duration"
                  placeholder="Ex: 120"
                  className="mt-2"
                  value={formik.values.duration}
                  onChange={handleNumberChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.duration && formik.errors.duration && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.duration}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-lg">Informações Financeiras</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Orçamento</Label>
                  <CurrencyInput
                    name="budget"
                    value={formik.values.budget}
                    onChange={(name: string, value: number) =>
                      formik.setFieldValue(name, value)
                    }
                    placeholder="R$ 0,00"
                    touched={formik.touched.budget}
                    error={formik.errors.budget}
                  />
                </div>
                <div>
                  <Label>Receita</Label>
                  <CurrencyInput
                    name="revenue"
                    placeholder="Ex: R$ 200.000.000,00"
                    value={formik.values.revenue}
                    onChange={(name: string, value: number) =>
                      formik.setFieldValue(name, value)
                    }
                    touched={formik.touched.revenue}
                    error={formik.errors.revenue}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white text-lg">Status e Categorização</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Idioma Original</Label>
                  <Select
                    name="originalLanguage"
                    className="mt-2"
                    value={formik.values.originalLanguage}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Selecione um idioma</option>
                    {Object.values(OriginalLanguage).map((language) => (
                      <option key={language} value={language}>
                        {languageLabels[language]}
                      </option>
                    ))}
                  </Select>
                  {formik.touched.originalLanguage &&
                    formik.errors.originalLanguage && (
                      <span className="text-red-500 text-sm">
                        {formik.errors.originalLanguage}
                      </span>
                    )}
                </div>
              </div>

              <div>
                <Label>Gêneros</Label>
                <Select
                  name="genres"
                  multiple
                  className="mt-2 h-[120px]"
                  value={formik.values.genres}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {Object.values(Genre).map((genre) => (
                    <option key={genre} value={genre}>
                      {genreLabels[genre]}
                    </option>
                  ))}
                </Select>
                {formik.touched.genres && formik.errors.genres && (
                  <span className="text-red-500 text-sm">
                    {formik.errors.genres}
                  </span>
                )}
              </div>
            </div>

            <div>
              <Label>Trailer do Filme (Opcional)</Label>
              <Input
                name="trailerUrl"
                placeholder="Digite a URL do trailer (ex: https://youtube.com/...)"
                className="mt-2"
                value={formik.values.trailerUrl}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.trailerUrl && formik.errors.trailerUrl && (
                <span className="text-red-500 text-sm">
                  {formik.errors.trailerUrl}
                </span>
              )}
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                variant="secondary"
                className="flex-1"
                type="button"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="flex-1"
                disabled={isLoading}
              >
                {isLoading ? "Salvando..." : "Criar Filme"}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
