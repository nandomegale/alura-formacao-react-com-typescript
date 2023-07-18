import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import http from "../../../http/http";
import ITag from "../../../interfaces/ITag";
import IRestaurante from "../../../interfaces/IRestaurante";

const FormularioPrato = () => {
  const [nomePrato, setNomePrato] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tags, setTags] = useState<ITag[]>([]);
  const [tag, setTag] = useState("");
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [restaurante, setRestaurante] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);

  const selecionarArquivo = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setImagem(event.target.files[0]);
    } else {
      setImagem(null);
    }
  };

  useEffect(() => {
    http.get<{ tags: ITag[] }>("tags/").then((resposta) => {
      setTags(resposta.data.tags);
    });
    http.get<IRestaurante[]>("restaurantes/").then((resposta) => {
      setRestaurantes(resposta.data);
    });
  }, []);

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData();
    form.append("nome", nomePrato);
    form.append("tag", tag);
    form.append("descricao", descricao);
    form.append("restaurante", restaurante);

    if (imagem) {
      form.append("imagem", imagem);
    }

    http
      .request({
        url: "pratos/",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: form,
      })
      .then((resposta) =>
        alert(`Prato com id: ${resposta.data.id} criando com sucesso!`)
      )
      .catch((erro) => console.log(erro));
  };

  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 1 }}>
        <Paper sx={{ p: 2 }}>
          {/* conteudo da página */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Typography component="h1" variant="h6">
              Formulario de Pratos
            </Typography>
            <Box
              component="form"
              sx={{ width: "100%" }}
              onSubmit={onSubmitForm}
            >
              <TextField
                value={nomePrato}
                onChange={(event) => setNomePrato(event.target.value)}
                label="Nome do prato"
                variant="standard"
                fullWidth
                required
                margin="dense"
              />
              <TextField
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
                label="Descrição do prato"
                variant="standard"
                fullWidth
                required
                margin="dense"
              />
              <FormControl margin="dense" fullWidth>
                <InputLabel id="select-tag">Tag</InputLabel>
                <Select
                  labelId="select-tag"
                  value={tag}
                  onChange={(event) => setTag(event?.target.value)}
                  required
                >
                  {tags.map((tag) => (
                    <MenuItem key={tag.id} value={tag.value}>
                      {tag.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl margin="dense" fullWidth>
                <InputLabel id="select-restaurante">Restaurante</InputLabel>
                <Select
                  labelId="select-restautante"
                  value={restaurante}
                  onChange={(event) => setRestaurante(event?.target.value)}
                  required
                >
                  {restaurantes.map((restaurante) => (
                    <MenuItem key={restaurante.id} value={restaurante.id}>
                      {restaurante.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <input type="file" onChange={selecionarArquivo} />

              <Button
                sx={{ marginTop: 1 }}
                type="submit"
                variant="outlined"
                fullWidth
              >
                Salvar
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default FormularioPrato;
