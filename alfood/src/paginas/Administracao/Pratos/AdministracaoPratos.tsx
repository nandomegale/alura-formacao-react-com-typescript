import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../../http/http";
import IPrato from "../../../interfaces/IPrato";

const AdministracaoPratos = () => {
  const [pratos, setPratos] = useState<IPrato[]>([]);

  useEffect(() => {
    http.get<IPrato[]>("pratos/").then((resposta) => {
      setPratos(resposta.data);
    });
  }, []);

  const excluir = (pratoParaExcluir: IPrato) => {
    http.delete(`pratos/${pratoParaExcluir.id}/`).then(() => {
      const listaPrato = pratos.filter(
        (prato) => prato.id !== pratoParaExcluir.id
      );
      setPratos([...listaPrato]);
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Tag</TableCell>
            <TableCell>Imagem</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {pratos?.map((prato, index) => (
            <TableRow key={index}>
              <TableCell>{prato.nome}</TableCell>
              <Tooltip title={prato.descricao} placement="right">
                <TableCell>{prato.descricao.slice(0, 20)}...</TableCell>
              </Tooltip>
              <TableCell>{prato.tag}</TableCell>
              <TableCell>
                [{" "}
                <a href={prato.imagem} target="_blank" rel="noreferrer">
                  ver imagem
                </a>{" "}
                ]
              </TableCell>
              <TableCell>
                [ <Link to={`/admin/pratos/${prato.id}`}>editar</Link> ]
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => excluir(prato)}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdministracaoPratos;
